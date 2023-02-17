import LeftSection from "@components/contact-page-section/left-section";
import RightSection from "@components/contact-page-section/right-section";

import stl from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <div className={stl.contactPage}>
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default ContactPage;
