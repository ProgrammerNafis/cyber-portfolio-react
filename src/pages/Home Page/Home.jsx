import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SectionCurrent from "../../components/SectionCurrent/SectionCurrent";
import SectionDev from "../../components/SectionDev/SectionDev";

const Home = () => {
    return (
        <div>
          <Header/>
          <SectionDev/>
          <SectionCurrent/>
          <Footer/>
        </div>
    );
};

export default Home;