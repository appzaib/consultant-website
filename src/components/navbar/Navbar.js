import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

import Logo from "@assets/logo.svg";
import ArrowDown from "@assets/arrow-down.svg";
import ArrowNext from "@assets/arrow-right.svg";
import CareerIcon from "@assets/career.svg";
import CaseStudyIcon from "@assets/case-study.svg";
import ServiceIcon from "@assets/service.svg";
import HowWeWorkIcon from "@assets/how-we-work.svg";
import BlogIcon from "@assets/blog.svg";

import stl from "./Navbar.module.scss";

const Navbar = () => {
  const [dropDownItems, setDropDownItems] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const [dropDownName, setDropDownName] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [dropDownMenu, setDropDownMenu] = useState({
    careers: false,
    services: false,
    how_we_work: false,
  });

  const openDropDown = (name) => {
    if (name) {
      dropDownMenu[dropDownName] = true;
      setDropDown(true);
    } else {
      setDropDownName("");
      setDropDown(false);
    }
  };

  const { careers, services, how_we_work } = dropDownMenu;

  const handleHover = (name) => {
    getDropDownData(name);
    openDropDown(name);
  };

  const handleHoverOut = () => {
    setDropDown(false);
    dropDownMenu[dropDownName] = false;
    setDropDownItems([]);
  };

  const getDropDownData = (name) => {
    setDropDownName(name);

    const services = [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Design", href: "/services/design" },
      { name: "Fintech", href: "/services/fintech" },
      { name: "Machine Learning", href: "/services/machine-learning" },
      { name: "DevOps", href: "/services/devOps" },
      { name: "Mobile Development", href: "/services/mobile-development" },
      { name: "MLOps", href: "/services/mlOps" },
      { name: "Blockchain", href: "/services/blockchain" },
      { name: "Testing", href: "/services/testing" },
    ];

    const how_we_work = [
      { name: "Product Delivery", href: "/how-we-work/product-delivery" },
      { name: "Staff Augmentation", href: "/how-we-work/staff-augmentation" },
      { name: "Agile Playbook", href: "/how-we-work/agile-playbook" },
    ];

    const careers = [
      { name: "We are Hiring", href: "/career/we-are-hiring" },
      {
        name: "Candidate Referral Program",
        href: "/career/candidate-referral",
      },
    ];

    if (name === "services") {
      setDropDownItems(services);
    } else if (name === "how_we_work") {
      setDropDownItems(how_we_work);
    } else if (name === "careers") {
      setDropDownItems(careers);
    }
  };

  const getPathName = () => {
    let pathname = location.pathname;
    handleHoverOut;
    return pathname;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
      style={{ originY: 0 }}
      className={clsx(stl.navbar, dropDown ? stl.hideShadow : stl.showShadow)}
    >
      <div className={stl.main}>
        <div
          onClick={() => {
            if (getPathName() !== "/") {
              location.href = "/";
            }
          }}
          className={stl.left}
        >
          <Logo />
        </div>
        <div id="mainList" className={stl.right}>
          <Link href="/career">
            <div
              id="careers"
              onMouseOver={() => handleHover("careers")}
              className={careers ? stl.rotateCar : stl.undoRotate}
            >
              Careers <ArrowDown />
            </div>
          </Link>
          <Link href="/casestudy">
            <div onMouseOver={() => setDropDown(false)}>Case Studies</div>
          </Link>
          <Link href="/services">
            <div
              id="services"
              onMouseOver={() => handleHover("services")}
              className={services ? stl.rotateSer : stl.undoRotate}
            >
              Services <ArrowDown />
            </div>
          </Link>
          <Link href="/how-we-work">
            <div
              id="how_we_work"
              onMouseOver={() => handleHover("how_we_work")}
              className={how_we_work ? stl.rotateHow : stl.undoRotate}
            >
              How We Work <ArrowDown />
            </div>
          </Link>
          <Link href="/blog">
            <div onMouseOver={() => setDropDown(false)}>Blog</div>
          </Link>
        </div>
        <div className={stl.iconContainer}>
          <Link href="/career">
            <span className={stl.icon}>
              <CareerIcon />
            </span>
          </Link>
          <Link href="/casestudy">
            <span className={stl.icon}>
              <CaseStudyIcon />
            </span>
          </Link>
          <Link href="/services">
            <span className={stl.icon}>
              <ServiceIcon />
            </span>
          </Link>
          <Link href="/how-we-work">
            <span className={stl.icon}>
              <HowWeWorkIcon />
            </span>
          </Link>
          <Link href="/blog">
            <span className={stl.icon}>
              <BlogIcon />
            </span>
          </Link>
        </div>
      </div>
      <motion.div
        onMouseLeave={handleHoverOut}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: dropDown ? 1 : 0, scaleY: dropDown ? 1 : 0 }}
        style={{ originY: 0 }}
        transition={{ duration: 0.3 }}
        className={stl.dropDownContainer}
      >
        <ul
          id="dropDown"
          className={clsx(
            stl.dropDown,
            dropDown ? stl.showDropDown : stl.hideDropDown
          )}
        >
          {dropDownItems.map((list, i) => (
            <div
              onClick={() => (location.href = "")}
              key={i}
              className={stl.dropDownItem}
            >
              {list.name} <ArrowNext />
            </div>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
