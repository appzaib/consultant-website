import BlogPage from "@components/blog-page";
import CareersPage from "@components/careers-page";
import CaseStudyPage from "@components/casestudy-page";
import Footer from "@components/footer";
import Homepage from "@components/home-page";
import HowWeWorkSec from "@components/how-we-work-section";
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
      <BlogPage />
      {/* <HowWeWorkSec /> */}
      <Footer />
    </main>
  );
};

export default Home;
