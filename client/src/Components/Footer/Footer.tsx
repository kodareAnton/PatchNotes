import './Footer.css';
import { GitHub, Instagram, Linkedin, Mail } from 'react-feather';

export function Footer() {
  return (
    <div id="Footer">
      <div className="FooterBottom">
        <p>
          {' '}
          <GitHub />
          kodare Anton
        </p>

        <p>MingJunior's Server</p>
      </div>
      <p className="line">|</p>
      <div className="FooterBottom">
        <p>
          {' '}
          <GitHub />
          kodare Anton
        </p>

        <p>MingJunior's Server</p>
      </div>
      <p className="line">|</p>
      <div>
        {' '}
        <GitHub />
        <Instagram />
        <Linkedin />
        <Mail />
      </div>
    </div>
  );
}
