import "./Home.scss";
import Logo from "../../Assets/Challenge-amico.png";

const Home = () => {
  return (
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
          <img src={Logo} alt="" className="img-content"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
