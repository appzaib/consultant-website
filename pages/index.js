import CareersPage from "@components/careers-page";
import CaseStudyPage from "@components/casestudy-page";
import Footer from "@components/footer";
import Homepage from "@components/home-page";
import Navbar from "@components/navbar";
import ServicePageSection from "@components/servicepage-section";
import ServicesPage from "@components/services-page";

const Home = () => {
  return (
    <main>
      <Navbar />
      {/* <CareersPage /> */}
      {/* <Homepage /> */}
      {/* <CaseStudyPage /> */}
      <ServicesPage />
      <Footer />
    </main>
  );
};

export default Home;
