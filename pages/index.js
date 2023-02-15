import { useState } from "react";

import BlogPage from "@components/blog-page";
import CareersPage from "@components/careers-page";
import CaseStudyPage from "@components/casestudy-page";
import ContactPage from "@components/contact-page";
import Footer from "@components/footer";
import Homepage from "@components/home-page";
import HowWeWorkPage from "@components/how-we-work-page";
import Navbar from "@components/navbar";
import ServicesPage from "@components/services-page";
import ProgressBar from "@components/progress-bar";

const Home = () => {
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
      <Navbar />
      {/* <CareersPage /> */}
      {/* <Homepage /> */}
      {/* <CaseStudyPage /> */}
      <ServicesPage />
      {/* <BlogPage /> */}
      {/* <HowWeWorkPage /> */}
      {/* <ContactPage /> */}
      <Footer showContactCard={false} />
    </main>
  );
};

export default Home;
