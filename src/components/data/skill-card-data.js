import PrimaryCard from "@components/cards/primary-card";

import MobileDevIcon from "@assets/mobile-dev.png";
import MobileDevIcon2 from "@assets/mobile-dev-2.png";
import DesignIcon from "@assets/design-ux-ui.png";
import DesignIcon2 from "@assets/design-ux-ui-2.png";
import AgileDevIcon from "@assets/agile-dev.webp";
import AgileDevIcon2 from "@assets/agile-dev-2.webp";

const skillCardArray = [
  <PrimaryCard
    heading="Web Design and Development"
    description="We specialize in creating custom websites that not only look great, but are tailored to meet the unique needs of your business. Our web development team will work with you to create a website that's not only visually appealing, but also user-friendly and optimized for search engines."
    list={["JavaScript", "PHP", "MySQl", "Node.js", "React.js"]}
    key={1}
  />,
  <PrimaryCard
    imgSrc={MobileDevIcon.src}
    imgSrc2={MobileDevIcon2.src}
    heading="E-commerce Website Development"
    description="We can help you set up an online store and enable you to sell your products or services directly through your website. Our team has experience with a variety of e-commerce platforms, and can create a solution that's right for your business."
    list={["Magento", "WooCommerce", "Shopify", "ElasticSearch", "Redis"]}
    key={2}
    transitionDelay={0.1}
  />,
  <PrimaryCard
    imgSrc={DesignIcon.src}
    imgSrc2={DesignIcon2.src}
    heading="Mobile App Development"
    description="With more and more people accessing the web through mobile devices, having a mobile app can be a valuable asset for your business. We offer mobile app development services for both iOS and Android platforms."
    list={["Java", "Swift", "React Native", "Kotlin", "Xamarin"]}
    key={3}
    transitionDelay={0.2}
  />,
  <PrimaryCard
    imgSrc={AgileDevIcon.src}
    imgSrc2={AgileDevIcon2.src}
    heading="Website Optimization"
    description="A slow-loading website can be frustrating for users and hurt your search engine rankings. Our team can optimize your website's performance and ensure it loads quickly and smoothly for all users."
    list={[
      "CDN",
      "Caching",
      "Image Optimization",
      "Gzip Compression",
      "Minification",
    ]}
    key={4}
    transitionDelay={0.3}
  />,
];

export default skillCardArray;
