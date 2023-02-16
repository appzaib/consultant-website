import PrimaryCard from "@components/cards/primary-card";

import MobileDevIcon from "@assets/mobile-dev.png";
import MobileDevIcon2 from "@assets/mobile-dev-2.png";
import DesignIcon from "@assets/design-ux-ui.png";
import DesignIcon2 from "@assets/design-ux-ui-2.png";
import AgileDevIcon from "@assets/agile-dev.webp";
import AgileDevIcon2 from "@assets/agile-dev-2.webp";

const skillCardArray = [
  <PrimaryCard
    description="We are an agile software company providing both back-end and front-end development. Our teams build web applications powered by bulletproof code, with stunning interfaces."
    list={[
      "Python & JavaScript Development",
      "Django & DjangoCMS Development",
      "Angular, React & Vue Development",
      "Node.js & Elixir Development",
    ]}
    key={1}
  />,
  <PrimaryCard
    imgSrc={MobileDevIcon.src}
    imgSrc2={MobileDevIcon2.src}
    heading="Mobile Development"
    description="Smartphones, tablets, wearables - follow your users where they are with carefully crafted mobile apps. Reach customers via Android, iOS, or cross-platform solutions."
    list={[
      "iOS App Development",
      "Android App Development",
      "Flutter Development",
      "React Native Development",
    ]}
    key={2}
    transitionDelay={0.1}
  />,
  <PrimaryCard
    imgSrc={DesignIcon.src}
    imgSrc2={DesignIcon2.src}
    heading="Product Design"
    description="Great code deserves an equally stunning visual representation, and this is what we deliver. Our Product Design team combines beautiful interfaces with captivating user experience."
    list={[
      "User Experience Design",
      "Web & Mobile Interface Design",
      "Google Design Sprint",
      "Motion Design",
    ]}
    key={3}
    transitionDelay={0.2}
  />,
  <PrimaryCard
    imgSrc={AgileDevIcon.src}
    imgSrc2={AgileDevIcon2.src}
    heading="Agile Development"
    description="At 10Clouds, we’re more than just Project Managers, we’re Product Delivery Managers. This means that we’re with you at every step of your product journey - from discovery, through to the development of a scalable and effective solution."
    list={[
      "Product Discovery",
      "Early Market Validation",
      "Product Delivery",
      "Product Maintenance",
      "Product Hand-Off",
    ]}
    key={4}
    transitionDelay={0.3}
  />,
];

export default skillCardArray;
