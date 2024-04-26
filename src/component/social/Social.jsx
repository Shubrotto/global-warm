import "./social.scss";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";

const Social = () => {
  return (
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
  );
};

export default Social;
