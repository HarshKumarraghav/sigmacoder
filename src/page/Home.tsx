import Header from "../components/Navbar/Header";
import Section2 from "../components/Home/Section2";
import Seection3 from "../components/Home/Seection3";
import Footer from "../components/Footer/Footer";
import Section1 from "../components/Home/Section1";

const Home = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <Section1 />
      <main className="max-w-screen-xl mx-auto text-dark px-4">
        <h2 className="font-bold md:my-14 my-6 text-3xl md:text-4xl max-w-lg">
          Defy Limits, Code Beyond Imagination! with{" "}
          <span className="gradient___text___color italic">Sigmacoder</span>.
        </h2>
        <Section2 />
      </main>
      <Seection3 />
      <Footer />
    </div>
  );
};

export default Home;
