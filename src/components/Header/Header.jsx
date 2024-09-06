import "./Header.css";
import HeroDev from '../../assets/Group.png'

const Header = () => {
  return (
    <>
    {/* navbar section */}
      <nav>
        <div className="containerNav">
          <div className="navinfo">
            <h1 className="logosn">S.Nafis</h1>
            <button className="btndo"> Download Resume</button>
          </div>
        </div>
      </nav>
      {/* navbar section end */}

    {/* hero section */}
      <section className="HeroSection">
        <div className="bg-image">

            <img className="herodevimg" src={HeroDev} alt="" />
            
          
            <h2 className="hero-text">
              <q className="hero-textdone"> In the near future, I hope to become a Developer. </q>
            </h2>
            <p className="simple-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry<q></q>s standard dummy text.
            </p>
            <button className="contact-hero">
                Contact with me
            </button>
        </div>
      </section>
      {/* hero section end */}
      
    </>
  );
};

export default Header;
