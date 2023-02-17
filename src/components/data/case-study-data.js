import CaseStudyCard from "@components/cards/case-study-card";

import ProjectImage from "@assets/project.png";
import ProjectImage2 from "@assets/project-2.png";
import ProjectImage3 from "@assets/project-3.png";

export const description =
  "Our Case Study Section features real-life examples of how we have helped our clients achieve their web development goals. We highlight the challenges our clients faced, the solutions we provided, and the results they achieved. These case studies provide valuable insights into our web development process and the expertise we bring to every project. We believe in transparency and accountability, and our case studies demonstrate how we have delivered successful web development solutions to our clients.";

export const caseStudies1 = [
  <CaseStudyCard
    imgSrc={`${ProjectImage.src}`}
    title="Unit Converter"
    description="Unit Converter Website is a website that converts units of weight, length and area. Unit Converter Website provides you with the ability to easily convert any unit of weight, length or area in metric, customary or U.S. Customary units (the default units). The site also provides a handy calculator which allows you to quickly find out how many grams, liters or square meters are in your selected unit."
    key={1}
  />,
  <CaseStudyCard
    imgSrc={`${ProjectImage2.src}`}
    title="BrightBuy"
    description="BrightBuy is an e-commerce website that specializes in a wide variety of products, ranging from electronics and home appliances to clothing and accessories. The website is designed to provide a seamless shopping experience for customers, with features such as a wish list, order tracking, and a customer feedback section. BrightBuy is an excellent online destination for those looking for quality products at affordable prices."
    key={2}
  />,
  <CaseStudyCard
    imgSrc={`${ProjectImage3.src}`}
    title="SocialEase"
    description="SocialEase is a social network platform website that allows users to create profiles, connect with friends and family, and share content such as photos, videos, and posts. SocialEase offers a range of features such as private messaging, photo and video sharing, and a newsfeed to keep users up to date with the latest content from their friends and followers."
    key={3}
  />,
];

export const cases = [
  <CaseStudyCard
    title="E-commerce"
    description="We created a user-friendly online store for a client, complete with a custom shopping cart and secure payment gateway."
    key={1}
  />,
  <CaseStudyCard
    title="Responsive Web Design"
    description="Our team designed and developed a fully responsive website that looks great on all devices, helping our client reach a wider audience."
    key={2}
  />,
  <CaseStudyCard
    title="Custom Web App Dev"
    description="We built a powerful custom web application that streamlined our client's business operations and increased efficiency."
    key={3}
  />,
  <CaseStudyCard
    title="Website Maintenance"
    description="Our team provides ongoing website maintenance and support to ensure our client's site is always up-to-date and running smoothly."
    key={4}
  />,
  <CaseStudyCard
    title="CMS Implementation"
    description="We implemented a content management system (CMS) for a client, giving them the ability to easily manage and update their website content."
    key={5}
  />,
  <CaseStudyCard
    title="Mobile App Development"
    description="We designed and developed a mobile app for a client, allowing them to better engage with their audience and increase brand awareness."
    key={6}
  />,
  <CaseStudyCard
    title="UI/UX Design"
    description="Our team created an intuitive and visually appealing user interface (UI) and user experience (UX) for a client's website, improving user engagement and satisfaction."
    key={7}
  />,
  <CaseStudyCard
    title="Website Speed Optimization"
    description="We optimized a client's website for speed, resulting in faster load times and a better user experience."
    key={8}
  />,
  <CaseStudyCard
    title="Landing Page Optimization"
    description="Our team optimized a client's landing page to improve conversion rates and drive more leads and sales."
    key={9}
  />,
  <CaseStudyCard
    title="SEO"
    description="We provided SEO services for a client, improving their website's visibility and search engine rankings."
    key={10}
  />,
  <CaseStudyCard
    title="Web Analytics"
    description="Our team implemented web analytics and reporting for a client, providing valuable insights into their website's performance and user behavior."
    key={11}
  />,
  <CaseStudyCard
    title="Social Media Integration"
    description="We integrated social media into a client's website, allowing them to easily share and promote their content on various social media platforms."
    key={12}
  />,
];
