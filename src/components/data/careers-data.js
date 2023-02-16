import UpperSection from "@components/careerspage-sections/upper-section";
import JobCard from "@components/cards/job-card";

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
