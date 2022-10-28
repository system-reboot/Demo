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
 <h1>Ok cool!! There were a variety of ways to win the game. James had played it long enough to know most of them and he could see what his opponent was trying to do.
  There was a simple counterattack that James could use and the game should be his. 
   He began deploying it with the confidence of a veteran player who had been in this situation a thousand times in the past.
   <br></br> 
 You should have come Second, Johnny.</h1>
  </div>
      </Fragment>
  );
};



export default Service;
