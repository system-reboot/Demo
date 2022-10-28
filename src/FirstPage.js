import "./FirstPage.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import image from "./image/A.jpg";
import image2 from "./image/asphalt wallpapers 16.jpg";
import image3 from "./image/wp5299030-cyberpunk-2077-mobile-wallpapers.jpg";
import image4 from "./image/wp7124063-pes-mobile-2020-hd-wallpapers.jpg";
const First = () => {
  return (
    <Fragment>
      <div className="hero">
        <nav>
          <h2 className="logo">
            <span>Pegasus</span>
          </h2>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Service</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
          <Link to="#" className="btn">
            Subscribe
          </Link>
        </nav>
        <div className="content">
          <h4>Welcome to</h4>
          <h1>
            <span>Pegasus</span>
          </h1>
          <h3>New era of Security!</h3>
        </div>
      </div>
      
    </Fragment>
  );
};

export default First;
