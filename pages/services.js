import { useState } from "react";

import CusHead from "@components/head";
import ProgressBar from "@components/progress-bar";
import Layout from "@components/layout";
import ServicesPage from "@components/services-page";
import ScrollToTop from "@components/scroll-to-top";

const Services = () => {
  const [progress, setProgress] = useState(0);

  if (typeof window !== "undefined") {
    const body = document.body;

    body.addEventListener("scroll", () => {
      const scrollPos = body.scrollTop;
      const scrollHeight = body.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollPos / scrollHeight) * 100;

      const progress = Math.round(scrollProgress);
      setProgress(progress);
    });
  }

  return (
    <>
      <CusHead />
      <main style={{ scrollBehavior: "smooth" }} id="main">
        <ScrollToTop />
        <ProgressBar progress={progress} />
        <Layout
          contactCardHeading="Ready to take the next step in your career? Let's talk"
          child={<ServicesPage />}
        />
      </main>
    </>
  );
};

export default Services;
