import "../css/hero.css";
import Navbar from "./Navbar";
import phone from "../../public/images/phone.png";

const Hero = () => {
  return (
    <>
      <main className="hero">
        <section className="hero-section">
          <Navbar />

          <div className="hero-content">
            <h2>Success starts with a great product</h2>

            <p>
              Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis.
              Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at
              posuere nibh lobortis et.
            </p>
          </div>

          <div className="hero-image">
            <img src={phone} alt="phone-image" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
