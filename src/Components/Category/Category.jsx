import "./Category.scss";
import Logo from "../../Assets/Challenge-amico.png";

const Category = () => {
  return (
    <div class="container">
      <h2 className="tittle">Explore by Category</h2>
      <div class="row">
        <div class="col-md-3">
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
          </form>
          <ul>
            <li>
              <a href="/">Fashion and Beauty</a>
            </li>
            <li>
              <a href="/">Fitness and Health</a>
            </li>
            <li>
              <a href="/">Tech and Gadget</a>
            </li>
            <li>
              <a href="/">Bussines and Finance</a>
            </li>
            <li>
              <a href="/">Gaming and E-sports</a>
            </li>
            <li>
              <a href="/">Pets and Animal</a>
            </li>
            <li>
              <a href="/">Lifestyle</a>
            </li>
          </ul>
          <button class="btn">See More...</button>
        </div>
        <div class="col-md-9">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <img src={Logo} alt="" className="card-image" />
              <div className="overlay-content">
                <div className="card-content">Fitness and Health</div>
              </div>
            </div>
            <div class="col">
              <img src={Logo} alt="" className="card-image" />
              <div className="overlay-content">
                <div className="card-content">Fashion and Beauty</div>
              </div>
            </div>
            <div class="col">
              <img src={Logo} alt="" className="card-image" />
              <div className="overlay-content">
                <div className="card-content">Tech and Gadget</div>
              </div>
            </div>
            <div class="col">
              <img src={Logo} alt="" className="card-image" />
              <div className="overlay-content">
                <div className="card-content">Gaming and E-sports</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
