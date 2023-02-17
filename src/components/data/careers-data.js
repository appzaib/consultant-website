import JobCard from "@components/cards/job-card";
import Card from "@components/cards/card";
import ValuesCard from "@components/cards/value-card";
import BlogCard from "@components/cards/blog-card";
import AwardCard from "@components/cards/award-card";

import BenefitImage1 from "@assets/benefit-1.png";
import BenefitImage2 from "@assets/benefit-2.png";
import BenefitImage3 from "@assets/benefit-3.png";
import BenefitImage4 from "@assets/benefit-4.png";
import BenefitImage5 from "@assets/benefit-5.png";
import BenefitImage6 from "@assets/benefit-6.png";
import ValueIcon1 from "@assets/value-1.svg";
import ValueIcon2 from "@assets/value-2.svg";
import ValueIcon3 from "@assets/value-3.svg";
import ValueIcon4 from "@assets/value-4.svg";
import ValueIcon5 from "@assets/value-5.svg";
import ValueIcon6 from "@assets/value-6.svg";
import BestDesignImage from "@assets/best-design-award.png";
import MostInnovativeImage from "@assets/most-innov-award.png";
import BestContentImage from "@assets/best-strategy-award.png";
import TopIndustryImage from "@assets/top-industry-award.png";
import OutstandingCustomerImage from "@assets/outstand-customer-award.png";
import EnvironmentalSustainabilityImage from "@assets/environment-sustain-award.png";

export const title = "Join Our Team";

export const description =
  "Are you passionate about web development and looking for a new challenge? [Your Web Development Company Name] is always on the lookout for talented individuals to join our team. We believe in fostering a collaborative and inclusive work environment where everyone can thrive and contribute to the success of our company. As a member of our team, you will have the opportunity to work on exciting web development projects and collaborate with some of the best developers in the industry. Check out our current job openings and apply today to take the next step in your web development career.";

export const jobCards = [
  <JobCard jobTitle="Web Developer" jobSalary="$4,000 - $8,000" key={1} />,
  <JobCard jobTitle="Frontend Developer" jobSalary="$4,000 - $7,000" key={2} />,
  <JobCard jobTitle="Backend Developer" jobSalary="$4,500 - $8,500" key={3} />,
  <JobCard
    jobTitle="Full Stack Developer"
    jobSalary="$5,000 - $9,000"
    key={4}
  />,
  <JobCard jobTitle="UX/UI Designer" jobSalary="$4,000 - $7,000" key={5} />,
  <JobCard jobTitle="Project Manager" jobSalary="$5,500 - $9,000" key={6} />,
  <JobCard jobTitle="Business Analyst" jobSalary="$4,500 - $7,500" key={7} />,
  <JobCard
    jobTitle="Quality Assurance Specialist"
    jobSalary="$5,500 - $9,500"
    key={8}
  />,
  <JobCard jobTitle="Technical Writer" jobSalary="$4,000 - $7,000" key={9} />,
  <JobCard jobTitle="DevOps Engineer" jobSalary="$5,000 - $8,000" key={10} />,
];

export const benefitCards = [
  <Card
    imgSrc={`${BenefitImage1.src}`}
    variant="secondary"
    heading="Comprehensive benefits package"
    description="Our comprehensive benefits package includes health insurance, dental coverage, 401(k) retirement plan, and paid time off, among other benefits. We believe in taking care of our employees so they can take care of our clients."
    key={1}
  />,
  <Card
    imgSrc={`${BenefitImage2.src}`}
    variant="secondary"
    heading="Flexible work arrangements"
    description="Flexible work arrangements have become an increasingly popular benefit for employees, offering them greater control over their work schedules and the ability to better balance their personal and professional lives. At the same time, employers who offer flexible work arrangements can benefit from increased productivity, reduced turnover, and lower overhead costs."
    key={2}
  />,
  <Card
    imgSrc={`${BenefitImage3.src}`}
    variant="secondary"
    heading="Collaborative and inclusive work culture"
    description="Collaborative and inclusive culture is an essential benefit for any organization seeking to foster a positive and productive work environment. By embracing diversity and promoting teamwork, companies can enjoy a range of benefits, including better employee engagement, retention, and overall business success."
    key={3}
  />,
  <Card
    imgSrc={`${BenefitImage4.src}`}
    variant="secondary"
    heading="Health and wellness programs"
    description="Health and wellness programs are becoming increasingly popular as employers recognize the importance of promoting employee well-being. These programs can include fitness classes, mental health resources, healthy living incentives, and other benefits that help employees maintain a healthy work-life balance."
    key={4}
  />,
  <Card
    imgSrc={`${BenefitImage5.src}`}
    variant="secondary"
    heading="Competitive compensation"
    description="Competitive compensation is a key benefit for attracting and retaining top talent in today's competitive job market. By offering fair and attractive salaries, bonuses, and benefits packages, companies can ensure they attract the best candidates and keep them motivated and engaged."
    key={5}
  />,
  <Card
    imgSrc={`${BenefitImage6.src}`}
    variant="secondary"
    heading="Professional development opportunities"
    description="Professional development opportunities are an important benefit for employees looking to grow and advance their careers. By providing training, mentorship, tuition assistance, and other opportunities for skill-building and career development, employers can help their employees reach their full potential and achieve their career goals while also improving overall company performance."
    key={6}
  />,
];

export const valueCards = [
  <ValuesCard
    icon={<ValueIcon1 />}
    heading="Innovation"
    desc="We are constantly pushing the boundaries of web development, and we are always exploring new and innovative solutions to meet our clients' needs."
    key={1}
  />,
  <ValuesCard
    icon={<ValueIcon2 />}
    heading="Customer Focus"
    desc="Our clients are at the center of everything we do, and we strive to provide exceptional customer service and support to ensure their complete satisfaction."
    key={2}
  />,
  <ValuesCard
    icon={<ValueIcon3 />}
    heading="Quality"
    desc="We take pride in delivering high-quality web development solutions that meet or exceed our clients' expectations."
    key={3}
  />,
  <ValuesCard
    icon={<ValueIcon4 />}
    heading="Collaboration"
    desc="We work closely with our clients to understand their unique needs and goals, and we collaborate with them throughout the web development process to ensure the best possible outcomes."
    key={4}
  />,
  <ValuesCard
    icon={<ValueIcon5 />}
    heading="Integrity"
    desc="We are committed to operating with the highest level of honesty, transparency, and ethical standards in all of our business dealings."
    key={5}
  />,
  <ValuesCard
    icon={<ValueIcon6 />}
    heading="Continuous Improvement"
    desc="We are always looking for ways to improve our processes, technologies, and services to provide the best possible web development solutions for our clients."
    key={6}
  />,
];

export const blogCards = [
  <BlogCard
    tag="Company Culture"
    title="The Importance of Company Culture"
    key={1}
  />,
  <BlogCard
    tag="Interview Tips"
    title="Tips for Nailing Your Job Interview"
    key={2}
  />,
  <BlogCard
    tag="Internships"
    title="From Intern to Full-Time Employee"
    key={3}
  />,
  <BlogCard
    tag="Fast-Paced Industies"
    title="The Benefits of Working in a Fast-Paced Industry"
    key={4}
  />,
  <BlogCard tag="Employee Welness" title="Balancing Work and Life" key={5} />,
  <BlogCard
    tag="Professional Development"
    title="Advancing Your Career"
    key={6}
  />,
];

export const awards = [
  <AwardCard
    title="Best Website Design"
    imgSrc={`${BestDesignImage.src}`}
    key={1}
  />,
  <AwardCard
    title="Most Innovative Use of Tech"
    imgSrc={`${MostInnovativeImage.src}`}
    key={2}
  />,
  <AwardCard
    title="Best Content Strategy"
    imgSrc={`${BestContentImage.src}`}
    key={3}
  />,
  <AwardCard
    title="Top Industry thought Leader"
    imgSrc={`${TopIndustryImage.src}`}
    key={4}
  />,
  <AwardCard
    title="Outstanding Customer Service"
    imgSrc={`${OutstandingCustomerImage.src}`}
    key={5}
  />,
  <AwardCard
    title="Environmental Sustainability"
    imgSrc={`${EnvironmentalSustainabilityImage.src}`}
    key={6}
  />,
];
