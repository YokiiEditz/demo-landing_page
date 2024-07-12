import "../css/footer.css";
import { Logos } from "./Navbar";

const socialLinks = ["Twitter", "Facebook", "LinkedIn", "Instagram"];

const Footer = () => {
  const textColor = "#5d6b8f";

  return (
    <footer>
      <Logos textColor={textColor} />
      <section>
        <div>
          <h3 className="title">VANCOUVER</h3>
          <p>400-401 West Georgia Street Vancouver, BC, Canada, V6B 5A1</p>
          <h3 className="title">VANCOUVER</h3>
          <p>400-401 West Georgia Street Vancouver, BC, Canada, V6B 5A1</p>
        </div>
        <div>
          <h3 className="title">FOLLOW US ON</h3>
          <div className="social-links">
            {socialLinks.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="title">about us </h3>
          <p>
            Since 2009, Unbounce has helped marketers and digital agencies
            increase website and campaign conversions.
          </p>
          <span>&copy; 2018 Insert Name Here. All rights reserved</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
