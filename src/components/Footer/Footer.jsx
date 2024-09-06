import "./Footer.css";
import fabico from "../../assets/Group 11.png";
import gitico from "../../assets/github-icon-1 1.png";
import linkedinico from "../../assets/linkedin-icon 1.png";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="bg-footer-img">
          <div className="bg-footer-content">
            <h2 className="f-title">I need Support</h2>
            <p className="f-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="inpt-sbt">
              <input
                placeholder="Suggest me any feedback for me"
                className="input-box"
                type="text"
              />{" "}
              <button className="f-sbt">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-last">
        <div className="foot-lst">
          <div className="flst-name">
            <h2>An Open Commitment by Shahariya Nafis</h2>
          </div>
          <div className="ico-last">
            <img src={fabico} alt="" />
            <img src={gitico} alt="" />
            <img src={linkedinico} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
