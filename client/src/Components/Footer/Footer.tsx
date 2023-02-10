import './Footer.css';
import { GitHub, Instagram, Linkedin, Mail } from 'react-feather';

export function Footer() {
  return (
    <div id="Footer">
      <div className="FooterBottom">
        <p>kodare Anton</p>
        <GitHub />
      </div>
      <p className="line">|</p>
      <div className="FooterBottom">
        <GitHub />
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
