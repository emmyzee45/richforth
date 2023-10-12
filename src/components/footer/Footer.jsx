import "./footer.css";

const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footeritem">
        <img src="/img/bg.png" className="footerimg" alt="" />
      </div>
      <div className="footeritem">
        <div className="footercard">
          <h2 className="footermotto">
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className="footercard">
          <h1 className="footertitle">FIND OUR RESTAURANTS</h1>
          <p className="footertext">
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className="footertext">
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className="footertext">
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className="footertext">
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className="footercard">
          <h1 className="footertitle">WORKING HOURS</h1>
          <p className="footertext">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className="footertext">
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
