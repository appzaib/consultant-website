import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import NewsletterImage from "@assets/newsletter.jpg";

import stl from "./Subscription.module.scss";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [animation, setAnimation] = useState(false);

  return (
    <div className={stl.subNewsLetter}>
      <motion.div
        onViewportEnter={() => setAnimation(true)}
        className={stl.container}
      >
        <motion.div
          initial={{ opacity: 0, x: -800 }}
          animate={{ opacity: animation ? 1 : 0, x: animation ? 0 : -800 }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.imgContainer}
        >
          <Image
            src={`${NewsletterImage.src}`}
            width={100}
            height={100}
            alt="newsletter-image"
            className={stl.img}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: animation ? 1 : 0, y: animation ? 0 : 800 }}
          transition={{ type: "spring", stiffness: 50 }}
          className={stl.textContainer}
        >
          <div className={stl.title}>
            Join Our Mailing List for the Latest Updates and News
          </div>
          <div className={stl.desc}>
            Subscribe to our newsletter to stay up-to-date on the latest trends,
            insights, and updates from our web development team.{" "}
          </div>
          <input
            type="email"
            name="email"
            placeholder="johndoe@domain.com"
            onChange={(e) => setEmail(e.target.value)}
            className={stl.input}
          />
          <button className={stl.btn}>Subscribe</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Subscription;
