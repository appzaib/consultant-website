import PropTypes from "prop-types";

import RecruitCard from "@components/cards/recruit-card";

import stl from "./RecruitProcessVer.module.scss";

const RecruitProcessHor = ({ heading }) => {
  return (
    <div className={stl.recruitProcessCont}>
      <h1 className={stl.heading}>{heading}</h1>
      <div className={stl.process}>
        <div className={stl.right}>
          <div className={stl.item}>
            <RecruitCard
              title="Consultation and Discovery"
              desc="The first step in our web development process is consultation and discovery. We'll work with you to understand your business, your audience, and your goals, and develop a clear understanding of what you need from your website. Through in-depth discussions and careful analysis, we'll gain a deep understanding of your unique challenges and opportunities, and develop a clear roadmap for success."
              right="1.6%"
            />
            <span className={stl.dot}>01</span>
          </div>
          <div className={stl.item}>
            <RecruitCard
              title="Planning and Design"
              desc="Once we understand your needs and goals, we move on to planning and design. We'll work closely with you to create a comprehensive plan for your website, taking into account everything from design and user experience to functionality and search engine optimization. We'll craft a customized web solution that's perfectly tailored to your unique needs, and present a design that aligns with your brand and goals."
              right="1.6%"
              background="radial-gradient(#f588d8, #c0a3e5)"
            />
            <div className={stl.dot}>03</div>
          </div>
          <div className={stl.item}>
            <RecruitCard
              title="Development and Testing"
              desc="With the plan and design in place, we move on to development and testing. Using the latest technologies and development techniques, we'll build a website that's beautiful, functional, and user-friendly. Throughout the development process, we'll keep you informed and involved, so that you can provide feedback and ensure that the final product meets your expectations. We'll also conduct rigorous testing to ensure that your website is error-free and optimized for performance."
              right="1.6%"
              background="radial-gradient(#76b2fe, #b69efe)"
            />
            <div className={stl.dot}>05</div>
          </div>
        </div>
        <div className={stl.lineVertical}></div>
        <div className={stl.left}>
          <div className={stl.item}>
            <RecruitCard
              title="Launch and Support"
              desc="Once development and testing are complete, it's time to launch your new website! We'll work with you to ensure a smooth transition, and make sure that your website is up and running as quickly and seamlessly as possible. We'll also provide training and ongoing support, so that you can get the most out of your new website and make any necessary updates or changes."
              left="1.6%"
              initial={{ x: 200, rotate: -25 }}
              background="radial-gradient(#fbc1cc, #fa99b2)"
            />
            <div className={stl.dot}>02</div>
          </div>
          <div className={stl.item}>
            <RecruitCard
              title="Optimization and Growth"
              desc="Finally, we move on to optimization and growth. Your website is an ongoing project, and we'll work with you to ensure that it continues to deliver results over time. We'll help you track your website's performance, make any necessary updates or changes, and provide ongoing support to ensure that your website remains an effective tool for your business. We'll also help you identify opportunities for growth and expansion, and provide guidance on how to leverage your website to achieve your business goals."
              left="1.6%"
              initial={{ x: 200, rotate: -25 }}
              background="radial-gradient(#60efbc, #58d5c9)"
            />
            <div className={stl.dot}>04</div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecruitProcessHor.defaultProps = {
  heading: "How We Work",
};

RecruitProcessHor.propTypes = {
  heading: PropTypes.string,
};

export default RecruitProcessHor;
