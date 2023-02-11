import { useState } from "react";
import { motion } from "framer-motion";

import Card from "@components/cards/card";

import stl from "./BenefitSection.module.scss";

const BenefitSection = () => {
  const [animation, setAnimation] = useState(false);

  let benefitCards = [];
  for (let i = 0; i < 6; i++) {
    benefitCards.push(
      <Card
        key={i}
        variant="secondary"
        background="#fff"
        heading="Lorem Ipsum"
        description="Pariatur ea proident occaecat deserunt ad labore laboris fugiat nulla duis nisi et amet. Nostrud veniam duis reprehenderit nisi non consectetur ex ipsum et deserunt elit ea cupidatat esse. Laboris Lorem velit sunt sunt dolor consectetur sint qui. Do occaecat adipisicing est ex voluptate quis elit esse qui adipisicing ea. Dolore anim dolor elit nisi aute esse."
      />
    );
  }

  return (
    <motion.div
      onViewportEnter={() => setAnimation(true)}
      className={stl.benefitSection}
    >
      <motion.h2
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : 1000 }}
        transition={{ type: "spring" }}
        className={stl.heading}
      >
        Sunt aliquip commodo esse duis in.
      </motion.h2>
      <div className={stl.cardContainer}>
        {benefitCards.map((item) => item)}
      </div>
    </motion.div>
  );
};

export default BenefitSection;
