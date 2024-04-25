import "./hero.scss";
import { climateChanges } from "../../data";
import Carousel from "react-material-ui-carousel";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="social_icons">
        <span>
          Facebook
          <FaFacebookSquare className="icons" />
        </span>
        <span>
          Twitter
          <FaTwitterSquare className="icons" />
        </span>
        <span>
          Github
          <FaGithubSquare className="icons" />
        </span>
        <span>
          LinkedIn
          <FaLinkedinIn className="icons" />
        </span>
      </div>
      <Carousel className="hero_wrapper">
        {climateChanges.map((item) => (
          <>
            <div className="hero_item" key={item.id}>
              <div className="hero_item_left">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
              <div className="hero_item_right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
