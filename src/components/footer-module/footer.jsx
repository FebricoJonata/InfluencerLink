import ig from "./Image/ig.png";
import x from "./Image/twt.png";
import drib from "./Image/dribble.png";
import li from "./Image/linkedin.png";
import fb from "./Image/fb.png";
import logo from "../../Assets/Logo New - Putih.png";
import "./footer-style.scss";

function Footer() {
  return (
    <div class="container-fluid bg-footer main-footer">
      <div class="column">
        <div class="row" style={{ paddingTop: "70px" }}>
          {/* SUBMENUS */}
          <div className="d-flex flex-row ">
            <Menus
              title={"About Us"}
              m1={"Contact Us"}
              m2={"Talents"}
              m3={"Partners"}
              m4={"Testimonials"}
            />

            <Menus
              title={"Legal Help"}
              m1={"Terms"}
              m2={"Conditions"}
              m3={"Privacy Policy"}
            />

            <Menus title={"Search"} m1={"Talents"} m2={"Categories"} />

            {/* Social Media */}

            <div class="d-flex flex-column" className="footer-container">
              <a href="">
                {" "}
                <img class="imgstyle" src={fb} alt="" />{" "}
              </a>
              <a href="">
                {" "}
                <img class="imgstyle" src={ig} alt="" />
              </a>
              <a href="">
                {" "}
                <img class="imgstyle" src={li} alt="" />
              </a>
              <a href="">
                {" "}
                <img class="imgstyle" src={drib} alt="" />
              </a>
              <a href="">
                {" "}
                <img class="imgstyle" src={x} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* LOGO AND MENU */}

        <div className="credit-container">
          <div className="credit">
            <img class="img-fluid" src={logo} alt="" />
            <p class="text-start fs-10 text-credit">© 2023 InfluencerLink</p>
            <p class="text-start fs-10 text-credit">
              Bina Nusantara University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Menus({ title, m1, m2, m3, m4 }) {
  return (
    <div class="footer-container">
      <h3 class="fw-bold py-4" className="title">
        {title}
      </h3>
      <div className="decor"></div>
      <a class="text-decoration-none" href="">
        <h3 class="menu-btn">{m1}</h3>
      </a>
      <a class="text-decoration-none" href="">
        <h3 class="menu-btn">{m2}</h3>
      </a>
      <a class="text-decoration-none" href="">
        <h3 class="menu-btn">{m3}</h3>
      </a>
      <a class="text-decoration-none" href="">
        <h3 class="menu-btn">{m4}</h3>
      </a>
    </div>
  );
}

export default Footer;
