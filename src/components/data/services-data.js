import PrimaryCard from "@components/cards/primary-card";

import Image1 from "@assets/agile-dev.webp";
import Image2 from "@assets/agile-dev-2.webp";
import Image3 from "@assets/blockchain.png";
import Image4 from "@assets/blockchain-2.png";
import Image5 from "@assets/design-ux-ui.png";
import Image6 from "@assets/design-ux-ui-2.png";
import Image7 from "@assets/devOps.png";
import Image8 from "@assets/devOps-2.png";
import Image9 from "@assets/fintech.png";
import Image10 from "@assets/fintech-2.png";
import Image11 from "@assets/mach-learning.png";
import Image12 from "@assets/mach-learning-2.png";
import Image13 from "@assets/MLOps.png";
import Image14 from "@assets/MLOps-2.png";
import Image15 from "@assets/mobile-dev.png";
import Image16 from "@assets/mobile-dev-2.png";
import Image17 from "@assets/prod-testing.png";
import Image18 from "@assets/prod-testing-2.png";
import Image19 from "@assets/web-dev.webp";
import Image20 from "@assets/web-dev-2.png";

const services = [
  <PrimaryCard
    imgSrc={`${Image19.src}`}
    imgSrc2={`${Image20.src}`}
    heading="Web Design and Development"
    description="We specialize in creating custom websites that not only look great, but are tailored to meet the unique needs of your business. Our web development team will work with you to create a website that's not only visually appealing, but also user-friendly and optimized for search engines."
    list={["JavaScript", "PHP", "MySQl", "Node.js", "React.js"]}
    key={1}
  />,
  <PrimaryCard
    imgSrc={`${Image1.src}`}
    imgSrc2={`${Image2.src}`}
    heading="E-commerce Website Development"
    description="We can help you set up an online store and enable you to sell your products or services directly through your website. Our team has experience with a variety of e-commerce platforms, and can create a solution that's right for your business."
    list={["Magento", "WooCommerce", "Shopify", "ElasticSearch", "Redis"]}
    key={2}
  />,
  <PrimaryCard
    imgSrc={`${Image15.src}`}
    imgSrc2={`${Image16.src}`}
    heading="Mobile App Development"
    description="With more and more people accessing the web through mobile devices, having a mobile app can be a valuable asset for your business. We offer mobile app development services for both iOS and Android platforms."
    list={["Java", "Swift", "React Native", "Kotlin", "Xamarin"]}
    key={3}
  />,
  <PrimaryCard
    imgSrc={`${Image3.src}`}
    imgSrc2={`${Image4.src}`}
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
  />,
  <PrimaryCard
    imgSrc={`${Image5.src}`}
    imgSrc2={`${Image6.src}`}
    heading="Website Maintenance"
    description="Keeping your website secure and up-to-date is essential for protecting your business and your users. We offer ongoing maintenance and security services to ensure your website remains safe and functional."
    list={[
      "VCS",
      "Web Analytics Tools",
      "CMS",
      "Security Tools",
      "Performance Optimization Tools ",
    ]}
    key={5}
  />,
  <PrimaryCard
    imgSrc={`${Image7.src}`}
    imgSrc2={`${Image8.src}`}
    heading="Cloud-Based Web Hosting"
    description="We offer cloud-based web hosting solutions to ensure your website is always up and running, with minimal downtime or disruptions."
    list={["AWS", "GCP", "MS Azure", "Digital Ocean", "Linode"]}
    key={6}
  />,
  <PrimaryCard
    imgSrc={`${Image9.src}`}
    imgSrc2={`${Image10.src}`}
    heading="CMS Development"
    description="A content management system (CMS) can make it easy for you to update and manage your website's content. We offer CMS development services for a variety of platforms, including WordPress, Drupal, and more."
    list={["PHP", "MySQL", "JavaScript", "Drupal", "Joomla"]}
    key={7}
  />,
  <PrimaryCard
    imgSrc={`${Image11.src}`}
    imgSrc2={`${Image12.src}`}
    heading="SEO"
    description="A well-optimized website can help improve your search engine rankings and drive more traffic to your site. We offer a range of SEO services, from keyword research to on-page optimization to link building."
    list={[
      "Google Analytics",
      "Keyword Search Tools",
      "On-page Tools",
      "Link Analysis Tools",
      "Schema Markup Tools",
    ]}
    key={8}
  />,
  <PrimaryCard
    imgSrc={`${Image13.src}`}
    imgSrc2={`${Image14.src}`}
    heading="Web Analytic and Reporting"
    description="Understanding how users are interacting with your website is essential for making informed business decisions. We offer web analytics and reporting services to help you track your website's performance and identify opportunities for improvement."
    list={[
      "Google Analytics",
      "Adobe Analytics",
      "Hotjar",
      "MixPanel",
      "Crazy Egg",
    ]}
    key={9}
  />,
  <PrimaryCard
    imgSrc={`${Image17.src}`}
    imgSrc2={`${Image18.src}`}
    heading="Website Accesibilty"
    description="Ensuring your website is accessible to all users, including those with disabilities, is not only the right thing to do, but it's also required by law. We can help ensure your website is ADA compliant and accessible to all users."
    list={[
      "Screen Readers",
      "Captioning Tools",
      "Alt Text",
      "Keyboard Navigation",
      "Color Contrast Checkers",
    ]}
    key={10}
  />,
];

export default services;
