import './Footer.css';
import { GitHub, Instagram, Linkedin, Mail } from 'react-feather';

export function Footer() {
  return (
    <div id="Footer">
      <div className="FooterBottom">
        <GitHub />
      </div>
      <p className="line">|</p>
      <div className="FooterBottom">
        <Instagram />
      </div>
      <p className="line">|</p>
      <div>
        {' '}
        <Linkedin />
        <Mail />
      </div>
    </div>
  );
}
