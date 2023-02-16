import { useState } from "react";

import ProgressBar from "@components/progress-bar";
import Layout from "@components/layout";
import ServicesPage from "@components/services-page";

const Services = () => {
  const [progress, setProgress] = useState(0);
  setTimeout(() => {
    const main = document.getElementById("main");

    const scrollProgressBar = () => {
      let scrollDistance = -main.getBoundingClientRect().top;
      let progressPercentage =
        (scrollDistance /
          (main.getBoundingClientRect().height -
            document.documentElement.clientHeight)) *
        100;

      let val = Math.floor(progressPercentage);
      setProgress(val);
    };

    window.addEventListener("scroll", scrollProgressBar);
  }, 50);

  return (
    <main style={{ scrollBehavior: "smooth" }} id="main">
      <ProgressBar progress={progress} />
      <Layout children={<ServicesPage />} />
    </main>
  );
};

export default Services;
