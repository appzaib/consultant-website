import CareersPage from "@components/careers-page";
import CaseStudyPage from "@components/casestudy-page";
import Footer from "@components/footer";
import Homepage from "@components/home-page";
import Navbar from "@components/navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      {/* <CareersPage /> */}
      {/* <Homepage /> */}
      <CaseStudyPage />
      <Footer />
    </main>
  );
};

export default Home;
