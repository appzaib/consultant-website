import { useState } from "react";

import ProgressBar from "@components/progress-bar";
import Layout from "@components/layout";
import CareersPage from "@components/careers-page";

const Careers = () => {
  const [progress, setProgress] = useState(0);

  setTimeout(() => {
    const body = document.body;

    body.addEventListener("scroll", () => {
      const scrollPos = body.scrollTop;
      const scrollHeight = body.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPos / scrollHeight) * 100;

      const progress = Math.round(scrollProgress);
      setProgress(progress);
    });
  }, 50);

  return (
    <main style={{ scrollBehavior: "smooth" }} id="main">
      <ProgressBar progress={progress} />
      <Layout
        contactCardHeading="Want to Work with Us? - Contact Us"
        child={<CareersPage />}
      />
    </main>
  );
};

export default Careers;
