
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialSubscrible.css";
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const SocialSubscrible = () => {
  return (
    <div className="social-subscribe">
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
      <a href="#" className="subscribe-btn">Subscribe</a>
    </div>
  );
};
export default SocialSubscrible;
