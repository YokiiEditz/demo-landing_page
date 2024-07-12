import "../css/navbar.css";

const Navbar = () => {
  const NavList = ["Tour", "Product", "Pricing"];

  const textColor = "white";
  return (
    <>
      <nav>
        <Logos textColor={textColor} />

        <ul>
          {NavList.map((nav, idx) => (
            <li key={idx}>{nav}</li>
          ))}
        </ul>
        <button className="sign-up">sign up</button>
      </nav>
    </>
  );
};

export default Navbar;

export const Logos = ({ textColor }) => {
  return (
    <div className="logo-box" style={{ color: textColor }}>
      <p className="logo"> </p>
    </div>
  );
};
