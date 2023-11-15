import "./Home.scss";
import Logo from "../../Assets/Challenge-amico.png";
import Category from "../Category/Category";
import Benefit from "../Benefit/Benefit";
import Membership from "../Membership/Membership";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../footer-module/footer";
import InfluencerLink from "../../Assets/InfluencerLink Logo.png"

const Home = () => {
  return (
    <>
      <nav>
        <img src={InfluencerLink} alt="logo" class="logo" />
        <div class="center-item">
          <ul class="nav-items">
            <li>
              <a href="/talent-detail">Talent</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            {/* <li>
              <a href="/Pages/aboutUs.html"></a>
            </li>
            <li>
              <a href="/Pages/events.html">Events</a>
            </li> */}
          </ul>
        </div>
        <div class="right-button">
          <a href="/profile">
            <button class="subs">Profile</button>
          </a>
        </div>
      </nav>
      <div class="container">
        <div class="row" style={{ height: "700px" }}>
          <div class="col-md-6 d-flex align-items-center">
            <div className="content">
              <h2>Exclusive Deals of Experts Talents</h2>
              <p>Explore different categories. Find the best deals.</p>
              <button className="btn">Find Now</button>
            </div>
          </div>

          <div class="col-md-6 d-flex align-items-center">
            <img src={Logo} alt="" className="img-content" />
          </div>
        </div>
      </div>
      <Category />
      <Benefit />
      <Testimonial />
      <Membership />
      <Footer />
    </>
  );
};

export default Home;
