import BlogPage from "@components/blog-page";
import CareersPage from "@components/careers-page";
import CaseStudyPage from "@components/casestudy-page";
import ContactPage from "@components/contact-page";
import Footer from "@components/footer";
import Homepage from "@components/home-page";
import HowWeWorkPage from "@components/how-we-work-page";
import Navbar from "@components/navbar";
import ServicesPage from "@components/services-page";

const Home = () => {
  return (
    <main>
      <Navbar />
      {/* <CareersPage /> */}
      {/* <Homepage /> */}
      {/* <CaseStudyPage /> */}
      {/* <ServicesPage /> */}
      {/* <BlogPage /> */}
      {/* <HowWeWorkPage /> */}
      <ContactPage />
      <Footer showContactCard={false} />
    </main>
  );
};

export default Home;
