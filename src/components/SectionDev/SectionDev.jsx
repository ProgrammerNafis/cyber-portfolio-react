import "./SectionDev.css";
import Group2 from '../../assets/Group 2.png'
import Group3 from '../../assets/Group 3.png'
import Group4 from '../../assets/Group 4.png'


const SectionDev = () => {
  return (
    <div className="SectionDevContainer">
      <div className="MainCont">
        <h2 className="Sec1Title">Why Web Development??</h2>
        <p className="Sec1Text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
        </p>


        <div className="sec-card">
         <div className="card-info">
         <h2 className="card-title">
            I will Do Coding and Change The World
            </h2>
            <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="card-btn">
                Learn More
            </button>
         </div>
         <div className="card-img">
            <img src={Group2} alt="" />
         </div>
        </div>


        <div className="sec-card">
        <div className="card-img">
            <img src={Group3} alt="" />
         </div>
         <div className="card-info">
         <h2 className="card-title">
            I will Do Coding and Change The World
            </h2>
            <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="card-btn">
                Learn More
            </button>
         </div>
        
        </div>
        
        
        
        <div className="sec-card2">
         <div className="card-info2">
         <h2 className="card-title2">
            I will Do Coding and Change The World
            </h2>
            <p className="card-text2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="card-btn2">
                Learn More
            </button>
         </div>
         <div className="card-img2">
            <img src={Group4} alt="" />
         </div>
        </div>

        

      </div>
    </div>
  );
};

export default SectionDev;
