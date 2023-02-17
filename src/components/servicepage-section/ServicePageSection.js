import { useState } from "react";
import { motion } from "framer-motion";

import services from "@components/data/services-data";

import stl from "./ServicePageSection.module.scss";

const ServicePageSection = () => {
  const [animation, setAnimation] = useState(false);

  return (
    <div className={stl.servPageSec}>
      <motion.div
        onViewportEnter={() => setAnimation(true)}
        className={stl.text}
      >
        <motion.h1
          initial={{ opacity: 0, x: 800 }}
          animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 800 }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.title}
        >
          Comprehensive Web Development Solutions for Your Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 800 }}
          animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 800 }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.desc}
        >
          At Codeline-Consulting, we're committed to helping businesses achieve
          their online goals through expert web development services. Whether
          you need a custom web application, a new e-commerce platform, or a
          mobile app, our team of skilled developers is here to help. We offer a
          full range of services, from web design and development to web hosting
          and ongoing maintenance, so you can trust us to handle all aspects of
          your online presence. We work closely with you to understand your
          unique business needs and create solutions that help you succeed.
          Browse our services below and contact us to learn more.
        </motion.p>
      </motion.div>
      <div className={stl.container}>{services.map((service) => service)}</div>
    </div>
  );
};

export default ServicePageSection;
