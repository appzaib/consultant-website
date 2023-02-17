import UpperSection from "@components/careerspage-sections/upper-section";
import JobCard from "@components/cards/job-card";
import Card from "@components/cards/card";
import ValuesCard from "@components/cards/value-card";
import BlogCard from "@components/cards/blog-card";
import AwardCard from "@components/cards/award-card";

import BestDesignImage from "@assets/best-design-award.png";
import MostInnovativeImage from "@assets/most-innov-award.png";
import BestContentImage from "@assets/best-strategy-award.png";
import TopIndustryImage from "@assets/top-industry-award.png";
import OutstandingCustomerImage from "@assets/outstand-customer-award.png";
import EnvironmentalSustainabilityImage from "@assets/environment-sustain-award.png";

export const title = "Join Our Team";

export const description =
  "Are you passionate about web development and looking for a new challenge? [Your Web Development Company Name] is always on the lookout for talented individuals to join our team. We believe in fostering a collaborative and inclusive work environment where everyone can thrive and contribute to the success of our company. As a member of our team, you will have the opportunity to work on exciting web development projects and collaborate with some of the best developers in the industry. Check out our current job openings and apply today to take the next step in your web development career.";

export const upperSection = [
  <UpperSection
    heading="Explore Opportunities"
    desc="Join our team of passionate web developers and designers, and work on exciting projects that challenge and inspire you. We are always on the lookout for talented individuals who are committed to delivering top-notch web development solutions. Our work environment is creative, dynamic, and collaborative, with plenty of opportunities for growth and development. If you're interested in becoming a part of our team, check out our current job openings and send us your application today."
    key={1}
  />,
  <UpperSection
    heading="Application Process"
    desc="The application process for our company is designed to ensure that we identify the right talent for our team. We believe that the selection process is a two-way street, where we get to know you and your skills, and you get to know us and our company culture. The application process involves submitting an application form, followed by an interview and assessment, and finally an offer letter. We aim to make the process as transparent and efficient as possible, while keeping you informed at every step."
    key={2}
    imgPosition="left"
  />,
  <UpperSection
    heading="Our Team and Management"
    desc=" We take pride in the people who work with us and consider them to be the backbone of our organization. We have a highly experienced and diverse team of professionals who are passionate about what they do. Our team members come from various backgrounds, bringing their unique perspectives and skill sets to the table. We believe in nurturing talent and providing a positive work environment that encourages growth and development."
    key={3}
  />,
];

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
    variant="secondary"
    heading="Comprehensive benefits package"
    description="Our comprehensive benefits package includes health insurance, dental coverage, 401(k) retirement plan, and paid time off, among other benefits. We believe in taking care of our employees so they can take care of our clients."
    key={1}
  />,
  <Card
    variant="secondary"
    heading="Flexible work arrangements"
    description="Flexible work arrangements have become an increasingly popular benefit for employees, offering them greater control over their work schedules and the ability to better balance their personal and professional lives. At the same time, employers who offer flexible work arrangements can benefit from increased productivity, reduced turnover, and lower overhead costs."
    key={2}
  />,
  <Card
    variant="secondary"
    heading="Collaborative and inclusive work culture"
    description="Collaborative and inclusive culture is an essential benefit for any organization seeking to foster a positive and productive work environment. By embracing diversity and promoting teamwork, companies can enjoy a range of benefits, including better employee engagement, retention, and overall business success."
    key={3}
  />,
  <Card
    variant="secondary"
    heading="Health and wellness programs"
    description="Health and wellness programs are becoming increasingly popular as employers recognize the importance of promoting employee well-being. These programs can include fitness classes, mental health resources, healthy living incentives, and other benefits that help employees maintain a healthy work-life balance."
    key={4}
  />,
  <Card
    variant="secondary"
    heading="Competitive compensation"
    description="Competitive compensation is a key benefit for attracting and retaining top talent in today's competitive job market. By offering fair and attractive salaries, bonuses, and benefits packages, companies can ensure they attract the best candidates and keep them motivated and engaged."
    key={5}
  />,
  <Card
    variant="secondary"
    heading="Professional development opportunities"
    description="Professional development opportunities are an important benefit for employees looking to grow and advance their careers. By providing training, mentorship, tuition assistance, and other opportunities for skill-building and career development, employers can help their employees reach their full potential and achieve their career goals while also improving overall company performance."
    key={6}
  />,
];

export const valueCards = [
  <ValuesCard
    heading="Innovation"
    desc="We are constantly pushing the boundaries of web development, and we are always exploring new and innovative solutions to meet our clients' needs."
    key={1}
  />,
  <ValuesCard
    heading="Customer Focus"
    desc="Our clients are at the center of everything we do, and we strive to provide exceptional customer service and support to ensure their complete satisfaction."
    key={2}
  />,
  <ValuesCard
    heading="Quality"
    desc="We take pride in delivering high-quality web development solutions that meet or exceed our clients' expectations."
    key={3}
  />,
  <ValuesCard
    heading="Collaboration"
    desc="We work closely with our clients to understand their unique needs and goals, and we collaborate with them throughout the web development process to ensure the best possible outcomes."
    key={4}
  />,
  <ValuesCard
    heading="Integrity"
    desc="We are committed to operating with the highest level of honesty, transparency, and ethical standards in all of our business dealings."
    key={5}
  />,
  <ValuesCard
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
