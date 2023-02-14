import { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import useTypingAnimtion from "@hook/useTypingAnimation";

import SearchIcon from "@assets/search.svg";

import stl from "./SearchBox.module.scss";

const SearchBox = ({ categoryList, customClass }) => {
  const [value, setValue] = useState(categoryList[1].name);
  const [searchValue, setSearchValue] = useState("");
  const [animation, setAnimation] = useState(false);
  const [showDropDown, setShowDropdown] = useState(false);
  const [delay, setDelay] = useState(false);

  useTypingAnimtion();

  const showDropdown = () => {
    setShowDropdown(true);
    setDelay(true);

    setTimeout(() => setDelay(false), 300);
  };

  return (
    <motion.div
      onViewportEnter={() => {
        setAnimation(true);
      }}
      className={clsx(stl.searchBoxContainer, customClass)}
    >
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{
          opacity: animation ? 1 : 0,
          y: animation ? 0 : 300,
        }}
        transition={{ duration: 0.3, type: "spring" }}
        className={stl.searchBox}
      >
        <div className={stl.inputWrapper}>
          <motion.input
            whileHover={{
              outline: "3px solid dodgerblue",
            }}
            whileFocus={{
              outline: "3px solid dodgerblue",
            }}
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearchValue(e.target.value)}
            className={stl.input}
          />
        </div>
        <motion.div
          whileHover={{
            outline: "3px solid dodgerblue",
          }}
          whileFocus={{
            outline: "3px solid dodgerblue",
          }}
          onMouseOver={showDropdown}
          onMouseOut={() => setShowDropdown(false)}
          id="category"
          className={stl.category}
        >
          {value}
          <motion.ul
            initial={{ opacity: 0, y: -2000 }}
            animate={{
              opacity: showDropDown ? 1 : 0,
              y: showDropDown ? 0 : -2000,
            }}
            style={{ originY: 0 }}
            id="categoryList"
            className={stl.categoryList}
          >
            {categoryList.map((list, i) => (
              <motion.li
                whileHover={{
                  x: 20,
                }}
                whileTap={{ scale: 1.05 }}
                initial={{ y: -200, opacity: 0 }}
                animate={{
                  y: showDropDown ? 0 : -200,
                  opacity: showDropDown ? 1 : 0,
                }}
                transition={{ delay: delay ? list.transitionDelay : 0 }}
                value={list.name}
                key={i}
                onClick={() => setValue(list.name)}
                className={stl.categoryItem}
              >
                {list.name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.button
          whileHover={{ boxShadow: "0 0 20px 7px dodgerblue" }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          onClick={() => console.log("Clicked...")}
          className={stl.submitBtn}
        >
          Search <SearchIcon />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

SearchBox.defaultProps = {
  categoryList: [
    { name: "Lorem Ipsum1", transitionDelay: "" },
    { name: "Lorem Ipsum2", transitionDelay: 0.1 },
    { name: "Lorem Ipsum3", transitionDelay: 0.2 },
    { name: "Lorem Ipsum4", transitionDelay: 0.3 },
    { name: "Lorem Ipsum5", transitionDelay: 0.4 },
  ],
};

SearchBox.propTypes = {
  categoryList: PropTypes.array,
};

export default SearchBox;
