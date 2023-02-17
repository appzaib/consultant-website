import Intro from "@components/intro";
import ServicePageSection from "@components/servicepage-section";

import BGImage from "@assets/services-intro.jpg";

const ServicesPage = () => (
  <>
    <Intro
      imgSrc={`${BGImage.src}`}
      heading="Expert Web Development Services to Grow Your Business"
      desc="Our team of skilled developers offers comprehensive web development services to help grow your business. From custom web applications to robust e-commerce platforms, we'll help you create a powerful online presence that sets your brand apart."
      btnText="Start a Project"
    />
    <ServicePageSection />
  </>
);

export default ServicesPage;
