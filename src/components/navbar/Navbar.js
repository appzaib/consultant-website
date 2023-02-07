import { useState, useRef } from "react";

import useOnClickOutside from "@hook/useClickOutside";

import Logo from "@assets/logo.svg";
import ArrowDown from "@assets/arrow-down.svg";
import ArrowNext from "@assets/arrow-next.svg";

import stl from "./Navbar.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownItems, setDropDownItems] = useState([]);

  const ref = useRef();

  const openDropDown = (name) => {
    const navbar = document.getElementById("navbar");

    if (name === "careers") {
      document.getElementById("dropDown").classList.add(stl.careers);
    } else {
      document.getElementById("dropDown").classList.remove(stl.careers);
    }

    if (name === "services") {
      navbar.style.height = "420px";
    } else {
      navbar.style.height = "230px";
    }
  };

  const closeDropDown = () => {
    const nav = document.getElementById("navbar");
    nav.style.height = "80px";
    document.getElementById("services").classList.remove(stl.rotateSer);
    document.getElementById("how_we_work").classList.remove(stl.rotateHow);
    document.getElementById("careers").classList.remove(stl.rotateCar);
  };

  const handleHover = (name) => {
    getDropDownData(name);
    setIsOpen(true);
    openDropDown(name);
  };

  const handleHoverOut = () => {
    setIsOpen(false);
    closeDropDown();
  };

  const getDropDownData = (name) => {
    const services = [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile Development", href: "/services/mobile-development" },
      { name: "Design", href: "/services/design" },
      { name: "Fintech", href: "/services/fintech" },
      { name: "Machine Learning", href: "/services/machine-learning" },
      { name: "DevOps", href: "/services/devOps" },
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
      { name: "We are Hiring", href: "/careers/we-are-hiring" },
      {
        name: "Candidate Referral Program",
        href: "/careers/candidate-referral",
      },
    ];

    if (name === "services") {
      setDropDownItems(services);
      document.getElementById("services").classList.add(stl.rotateSer);
      document.getElementById("how_we_work").classList.remove(stl.rotateHow);
      document.getElementById("careers").classList.remove(stl.rotateCar);
    } else if (name === "how_we_work") {
      setDropDownItems(how_we_work);
      document.getElementById("how_we_work").classList.add(stl.rotateHow);
      document.getElementById("services").classList.remove(stl.rotateSer);
      document.getElementById("careers").classList.remove(stl.rotateCar);
    } else if (name === "careers") {
      setDropDownItems(careers);
      document.getElementById("careers").classList.add(stl.rotateCar);
      document.getElementById("services").classList.remove(stl.rotateSer);
      document.getElementById("how_we_work").classList.remove(stl.rotateHow);
    }
  };

  const handleLiClick = (list) => {
    console.log(list.href);
    // location.href = `${list.href}`;
  };

  useOnClickOutside(closeDropDown, ref);

  return (
    <div
      onMouseLeave={handleHoverOut}
      ref={ref}
      id="navbar"
      className={stl.navbar}
    >
      <div className={stl.main}>
        <div
          onClick={() => {
            location.href = "/";
          }}
          className={stl.left}
        >
          <Logo />
        </div>
        <ul id="mainList" className={stl.right}>
          <li
            id="careers"
            onMouseOver={() => handleHover("careers")}
            onClick={() => {
              // location.href = "/careers";
              console.log("Clicked...");
            }}
          >
            Careers <ArrowDown />
          </li>
          <li
            onClick={() => {
              // location.href = "/case-studies";
              console.log("Clicked...");
            }}
          >
            Case Studies
          </li>
          <li
            id="how_we_work"
            onMouseOver={() => handleHover("how_we_work")}
            onClick={() => {
              // location.href = "/how-we-work";
              console.log("Clicked...");
            }}
          >
            How We Work <ArrowDown />
          </li>
          <li
            id="services"
            onMouseOver={() => handleHover("services")}
            onClick={() => {
              // location.href = "/services";
              console.log("Clicked...");
            }}
          >
            Services <ArrowDown />
          </li>
          <li
            onClick={() => {
              // location.href = "/blog";
              console.log("Clicked...");
            }}
          >
            Blog
          </li>
        </ul>
      </div>
      {isOpen && <div className={stl.divider}></div>}
      <ul id="dropDown" className={stl.dropDown}>
        {dropDownItems.map((list, i) => {
          return (
            <li
              onClick={() => handleLiClick(list)}
              key={i}
              className={stl.dropDownItem}
            >
              {list.name} <ArrowNext />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
