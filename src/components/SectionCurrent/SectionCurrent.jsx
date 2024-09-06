import "./SectionCurrent.css";
import htmlimg from '../../assets/Group 5.png'
import cssimg from '../../assets/css-3 1.png'
import jsimg from '../../assets/Group 5 (1).png'
import reactlogo from '../../assets/Group 13.png'
import nodejslogo from '../../assets/nodejs-1 1.png'
import mongodbimg from '../../assets/mongodb-icon-2 1.png'

const SectionCurrent = () => {
  return (
    <div className="crnt-main-cont">

      <div className="current-target">
        <h2 className="crnt-title">My Current Target</h2>
        <p className="crnt-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
        </p>

    <div className="flex-item-card">



    <div className="html">
        <img src={htmlimg} alt="" />
        <h3 className="html-title">HTML</h3>
        <p className="html-text">
        Lorem Ipsum is simply dummy text of the printing.
        </p>
        <a className="html-link" href="#">Learn More</a>
    </div>



    <div className="css">
    <img src={cssimg} alt="" />
        <h3 className="html-title">CSS</h3>
        <p className="html-text">
        Lorem Ipsum is simply dummy text of the printing.
        </p>
        <a className="html-link" href="#">Learn More</a>
    </div>


    <div className="js">
    <img src={jsimg} alt="" />
        <h3 className="html-title">JavaScript</h3>
        <p className="html-text">
        Lorem Ipsum is simply dummy text of the printing.
        </p>
        <a className="html-link" href="#">Learn More</a>
    </div>


    </div>

      </div>


      <div className="next-target">
        <h2 className="nxt-title">
        My Next Target
        </h2>
        <p className="nxt-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text.</p>

        <div className="nxt-cards">

        <div className="crd-nxt">
          <div>
          <img src={reactlogo} alt="" />
          </div>
          
          
           <div>
           <h2 className="crd-nxt-title">ReactJS</h2>
            <p className="crd-nxt-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text.
            </p>
            <a href="#" className="crd-nxt-link">
                Learn More
            </a>
           </div>
        </div>

        <div className="crd-nxt">
          <div>
          <img src={nodejslogo} alt="" />
          </div>
          
          
           <div>
           <h2 className="crd-nxt-title">ReactJS</h2>
            <p className="crd-nxt-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text.
            </p>
            <a href="#" className="crd-nxt-link">
                Learn More
            </a>
           </div>
        </div>

        <div className="crd-nxt">
          <div>
          <img src={mongodbimg} alt="" />
          </div>
          
          
           <div>
           <h2 className="crd-nxt-title">ReactJS</h2>
            <p className="crd-nxt-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text.
            </p>
            <a href="#" className="crd-nxt-link">
                Learn More
            </a>
           </div>
        </div>

        </div>

      </div>
    </div>
  );
};

export default SectionCurrent;
