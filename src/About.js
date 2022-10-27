import "./FirstPage.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import image from "./image/A.jpg";
import image2 from "./image/asphalt wallpapers 16.jpg";
const About = () => {
    return (
      <Fragment>
        <section className="about">
        <div className="main">
          <img src={image} height = "700" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Quest Gaming is the ultimate destination of playing and discussing
              games. Our major games lies across Sports, Action and Racing
              class. With nearly 15,000 games from AAA to indie and everything
              in-between. Enjoy exclusive deals, automatic game updates, and
              other great perks.
            </p>
            <button type="button">Browse the Store</button>
          </div>
        </div>
      </section>
      {/*  */}
      </Fragment>
  );
};

export default About;