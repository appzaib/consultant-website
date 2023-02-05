import { useState } from "react";
import Image from "next/image";

import PrimaryCard from "@components/cards/primary-card";
import Slider from "@components/slider";
import CaseStudyCard from "@components/cards/case-study-card";
import ReadMoreBtn from "@components/read-more-btn";
import Card from "@components/cards/card";
import Footer from "@components/footer";

import BGImage from "@assets/consulting.jpg";
import CareerImage from "@assets/career.jpeg";
import ArrowNext from "@assets/arrow-right-2.svg";

import stl from "./Homepage.module.scss";

const Homepage = () => {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <div className={stl.home}>
      <div className={stl.intro}>
        <Image
          src={`${BGImage.src}`}
          height={100}
          width={100}
          alt="Background Image"
          className={stl.bgImage}
        />
        <div className={stl.info}>
          <h1 className={stl.main}>
            World class design, agile delivery and product development
          </h1>
          <div className={stl.content}>
            200 experts who have served more than 500 international clients.
            Let's bring your idea to life!
          </div>
          <div className={stl.btnContainer}>
            <button
              onMouseOver={() => {
                setShowArrow(true);
              }}
              onMouseOut={() => {
                setShowArrow(false);
              }}
              onClick={() => {
                console.log("Clicked...");
                // location.href = "/contact-us";
              }}
            >
              Get in Touch{" "}
              {showArrow && (
                <span>
                  <ArrowNext />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={stl.skills}>
        <h1 className={stl.heading}>
          IT Development Services and Skills for Your Needs
        </h1>
        <div className={stl.container}>
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
        </div>
        <div className={stl.btnContainer}>
          <ReadMoreBtn variant="secondary" />
        </div>
      </div>
      <div className={stl.reviewContainer}>
        <div className={stl.text}>
          <h1 className={stl.heading}>What customers are saying about us?</h1>
          <p>
            We're very pleased with all the positive feedback we've received
            over the years. Thank you to all of our clients across the globe who
            continue to put their faith in us.
          </p>
        </div>
        <Slider />
      </div>
      <div className={stl.caseStudy}>
        <h1 className={stl.title}>Case Studies</h1>
        <div className={stl.container}>
          <CaseStudyCard width="370px" />
          <CaseStudyCard width="370px" />
          <CaseStudyCard width="370px" />
        </div>
        <div className={stl.btnContainer}>
          <ReadMoreBtn variant="secondary" />
        </div>
      </div>
      <div className={stl.how_we_work}>
        <h1 className={stl.title}>Discover How We Deliver Your Products</h1>
        <p className={stl.desc}>
          Adipisicing anim cillum ad do magna non mollit. Mollit cillum nisi
          eiusmod exercitation fugiat fugiat anim ea eu excepteur culpa est nisi
          labore. Veniam id ex elit Lorem nostrud ex velit ut sunt voluptate
          amet veniam. Consequat fugiat qui sit qui nulla exercitation proident
          consequat enim aliquip. Eu duis Lorem amet enim nisi ad ex incididunt
          officia excepteur Lorem magna et eu. Irure tempor sit deserunt dolore
          id aliqua.
        </p>
        <div className={stl.cardContainer}>
          <Card width="350px" />
          <Card width="350px" />
          <Card width="350px" />
          <Card width="350px" />
        </div>
        <div className={stl.btnContainer}>
          <ReadMoreBtn variant="secondary" />
        </div>
        <p className={stl.description}>
          <span className={stl.descr}>
            <span className={stl.primary}>3</span>
            <span className={stl.secondary}>OFFICES</span>
          </span>
          <span className={stl.descr}>
            <span className={stl.primary}>3</span>
            <span className={stl.secondary}>OFFICES</span>
          </span>
          <span className={stl.descr}>
            <span className={stl.primary}>3</span>
            <span className={stl.secondary}>OFFICES</span>
          </span>
        </p>
      </div>
      <div className={stl.career}>
        <h1 className={stl.title}>We hire and nurture top talent!</h1>
        <div className={stl.container}>
          <p className={stl.desc}>
            Exercitation sint cillum exercitation eiusmod non fugiat dolor
            commodo culpa ea consectetur minim. Adipisicing amet laborum ea
            voluptate nulla amet nisi nulla nulla eu elit deserunt magna nulla.
            Nisi occaecat consequat proident proident nisi culpa excepteur
            commodo ex enim commodo.
          </p>
          <Image
            src={`${CareerImage.src}`}
            width={100}
            height={100}
            alt="career-image"
            className={stl.img}
          />
        </div>
        <div className={stl.btnContainer}>
          <ReadMoreBtn variant="secondary" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
