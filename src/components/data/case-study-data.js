import CaseStudyCard from "@components/cards/case-study-card";
import Card from "@components/cards/card";

import ProjectImage from "@assets/project.png";
import ProjectImage2 from "@assets/project2.png";
import ProjectImage3 from "@assets/project3.png";

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

export const benefitCards = [
  <Card
    variant="secondary"
    heading="Comprehensive benefits package"
    description="Our comprehensive benefits package includes health insurance, dental coverage, 401(k) retirement plan, and paid time off, among other benefits. We believe in taking care of our employees so they can take care of our clients."
    key={1}
  />,
  <Card
    variant="secondary"
    heading="Flexible work arrangements"
    description="Our comprehensive benefits package includes health insurance, dental coverage, 401(k) retirement plan, and paid time off, among other benefits. We believe in taking care of our employees so they can take care of our clients."
    key={2}
  />,
  <Card
    variant="secondary"
    heading="Collaborative and inclusive work culture"
    description="Our comprehensive benefits package includes health insurance, dental coverage, 401(k) retirement plan, and paid time off, among other benefits. We believe in taking care of our employees so they can take care of our clients."
    key={3}
  />,
  <Card
    variant="secondary"
    heading="Health and wellness programs"
    description="Our comprehensive benefits package includes health insurance, dental coverage, 401(k) retirement plan, and paid time off, among other benefits. We believe in taking care of our employees so they can take care of our clients."
    key={4}
  />,
  <Card
    variant="secondary"
    heading="Competitive compensation"
    description="Our comprehensive benefits package includes health insurance, dental coverage, 401(k) retirement plan, and paid time off, among other benefits. We believe in taking care of our employees so they can take care of our clients."
    key={5}
  />,
  <Card
    variant="secondary"
    heading="Professional development opportunities"
    description="Our comprehensive benefits package includes health insurance, dental coverage, 401(k) retirement plan, and paid time off, among other benefits. We believe in taking care of our employees so they can take care of our clients."
    key={6}
  />,
];
