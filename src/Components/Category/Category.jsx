import "./Category.scss";

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
              <img
                src="https://plus.unsplash.com/premium_photo-1661380909057-0a703bd6a1d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWx0aCUyMGluZmx1ZW5jZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=".."
                className="card-image"
              />
              <div className="overlay-content">
                <div className="card-content">Fitness and Health</div>
              </div>
            </div>
            <div class="col">
              <img
                src="https://static.promediateknologi.id/crop/0x324:2160x1933/750x500/webp/photo/2022/10/12/722414333.jpg"
                alt=""
                className="card-image"
              />
              <div className="overlay-content">
                <div className="card-content">Fashion and Beauty</div>
              </div>
            </div>
            <div class="col">
              <img
                src="https://media.suara.com/pictures/653x366/2023/02/26/71237-potret-david-gadgetin-instagram-atgadgetins.jpg"
                alt=""
                className="card-image"
              />
              <div className="overlay-content">
                <div className="card-content">Tech and Gadget</div>
              </div>
            </div>
            <div class="col">
              <img
                src="https://awsimages.detik.net.id/community/media/visual/2022/07/21/channel-youtube-windah-basudara-kembali-fans-full-senyum_169.png?w=1200"
                alt=""
                className="card-image"
              />
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
