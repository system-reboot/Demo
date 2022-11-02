import "./FirstPage.css";
import { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import image from "./image/A.jpg";
import image2 from "./image/asphalt wallpapers 16.jpg";
import image3 from "./image/wp5299030-cyberpunk-2077-mobile-wallpapers.jpg";
import image4 from "./image/wp7124063-pes-mobile-2020-hd-wallpapers.jpg";
const Service = () => {
  



    return (
      <Fragment>
   
        <div className="service">
        <div className="title">
          <h2>Our Services</h2>
        </div>
        <div className="box">
          <div className="card">
            <h5>Sports</h5>
            <div className="pra">
              <p>
                <Link to="#">
                  <img src={image4} class="act" height="375" />
                </Link>
              </p>
              <p>
                <Link className="button" to="#">
                  More
                </Link>
              </p>
            </div>
          </div>

          <div className="card">
            <h5>Action</h5>
            <div className="pra">
              <p>
                <Link Link="#">
                  <img src={image3} class="act" height="375" />
                </Link>
              </p>

              <p>
                <Link className="button" to="#">
                  More
                </Link>
              </p>
            </div>
          </div>

          <div class="card">
            <h5>Racing</h5>
            <div class="pra">
              <p>
                <Link href="#">
                  <img src={image2} class="act" height="375" />
                </Link>
              </p>

              <p>
                <Link className="button" to="#">
                  More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Pegasus</p>
        <p>For more personalized recommendations, subscribe to the channel.</p>
        <div class="social">
          <a href="#">
            <img src="" />
          </a>
          <a href="#">
            <img />
          </a>
          <a href="#">
            <img />
          </a>
        </div>
        <br />
        <p class="loc">Location : Naya Raipur, C.G.</p>
        
      </footer>
      {/*  */}
      <div className="yes"> 
 <h1>rb1kT97FlGQZ571mFhPAR/6FSekAPQpOp9lesWiMcSDalSaS3BFgxoBGBWXRF8ZmNQqVFeEXfLbyeYj0K+5uS/IdeSUXJ7SDX162qMbebhAPubq0ejwh+qD+Z5dxK4oAJtWLy52YFjMaESZhKr9rgZdWXYJOzXVdz3sz5mNICsu3CYIpNqV//Y8jOo7x2QV5yxNCcoyroVX3GA8BwF4TJvOjO/mEq5oNuoaNc4QB1hqSibfsWt3kllrYNE4PlcjhYIyON1GR66EyRJu+Wlsa/2rzwIKRy/n+EssmKR1XZZmYHUVY86Kn6Aai6YaK3Op+dgNb5lPh8oJJKCKjZC8WrRmuvDwTdBr8QTslDQen92RupyAS7oYtvYr/ITf+B/YelLlyzDnmk3QSWdyebUfneW48VL6+LTC2Nz8WnyRk6s53bDhN84rn6Ceycd9ooPOM8bX1vdbsd2ALwpJGfGfmLMR5/aNNn4hkWG6NrEqx+MX3UXqsNCpUKZDL8uLWGgtmKFbgcasYLQwFSLDDwobiH3LbsvNxs58/fUd2YRG2XJCSezw9dMb8olDZnD8PBoaui7jv8WtuctoR8IAKDua80w==
   <br></br> 
 BhPj9K/tP+EZG0TSzL71ESVZ0fI/6wtqWjsdPefyohPd5QE49Px7BNQFX49pCQvwg5Cz0XcHcPR7r5ABErOPO4cyGiMkXQarr4UnzEecn+jM7xtGBHSix8yGuIgbXXQMcrzT2q8yzN8y7Me2AYG5I+0EU1OO+iE19DvdENyr7vo=</h1>
  </div>
      </Fragment>
  );
};



export default Service;
