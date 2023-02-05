import { useState } from "react";
import clsx from "clsx";

import Logo from "@assets/logo.svg";
import ArrowDown from "@assets/arrow-down.svg";
import ArrowNext from "@assets/arrow-right.svg";

import stl from "./Navbar.module.scss";

const Navbar = () => {
  const [dropDownItems, setDropDownItems] = useState([]);
  const [careers, setCareers] = useState(false);
  const [services, setServices] = useState(false);
  const [howWeWork, setHowWeWork] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const openDropDown = (name) => {
    if (name === "careers") {
      setCareers(true);
      setServices(false);
      setHowWeWork(false);
    } else if (name === "services") {
      setServices(true);
      setCareers(false);
      setHowWeWork(false);
    } else if (name === "how_we_work") {
      setHowWeWork(true);
      setServices(false);
      setCareers(false);
    } else {
      setCareers(false);
      setServices(false);
      setHowWeWork(false);
    }

    if (name) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  const handleHover = (name) => {
    getDropDownData(name);
    openDropDown(name);
  };

  const handleHoverOut = () => {
    setDropDown(false);
    setDropDownItems([]);
  };

  const getDropDownData = (name) => {
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
      { name: "We are Hiring", href: "/careers/we-are-hiring" },
      {
        name: "Candidate Referral Program",
        href: "/careers/candidate-referral",
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

  const handleLiClick = (list) => {
    console.log(list.href);
    // location.href = `${list.href}`;
  };

  const getPathName = () => {
    let pathname = location.pathname;
    return pathname;
  };

  return (
    <div
      onMouseLeave={handleHoverOut}
      id="navbar"
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
        <ul id="mainList" className={stl.right}>
          <li
            id="careers"
            onMouseOver={() => handleHover("careers")}
            onClick={() => {
              // location.href = "/careers";
              console.log("Clicked...");
            }}
            className={careers ? stl.rotateCar : undefined}
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
            id="services"
            onMouseOver={() => handleHover("services")}
            onClick={() => {
              // location.href = "/services";
              console.log("Clicked...");
            }}
            className={services ? stl.rotateSer : undefined}
          >
            Services <ArrowDown />
          </li>
          <li
            id="how_we_work"
            onMouseOver={() => handleHover("how_we_work")}
            onClick={() => {
              // location.href = "/how_we_work";
              console.log("Clicked...");
            }}
            className={howWeWork ? stl.rotateHow : undefined}
          >
            How We Work <ArrowDown />
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
      <ul
        id="dropDown"
        className={clsx(
          stl.dropDown,
          careers ? stl.careers : undefined,
          services ? stl.services : undefined,
          howWeWork ? stl.how_we_work : undefined,
          dropDown ? stl.showDropDown : stl.hideDropDown
        )}
      >
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
