import Navbar from "@components/navbar";
import Homepage from "@components/home";
import Footer from "@components/footer";
import PrimaryCard from "@components/cards/primary-card";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Homepage />
      <Footer />
      {/* <PrimaryCard /> */}
    </main>
  );
};

export default Home;
