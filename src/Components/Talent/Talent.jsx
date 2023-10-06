import Test from "../../Assets/Followers-amico.png";
import "./Talent.scss";

function Card({ image, title, description }) {
  return (
    <div className="col mt-4">
      <div class="card" style={{ width: "18rem" }}>
        <img src={image} class="card-img-top" alt={title} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <a href="/" class="btn btn-primary">
            Check Out
          </a>
        </div>
      </div>
    </div>
  );
}

const Talent = () => {
  return (
    <div>
      {/* <h2 className="d-flex justify-content-center">This Talent Page</h2> */}
      <div className="row">
        <div className="col-md-4 bg-warning">Side</div>
        <div className="col-md-8">
          <div className="row d-flex space-around">
            <Card
              image={Test}
              title={"Test"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error doloribus non modi exercitationem fugiat vel animi minima, perferendis architecto. Nesciunt aperiam, sit iure corporis blanditiis quasi praesentium cumque! Necessitatibus."
              }
            />
            <Card
              image={Test}
              title={"Test"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error doloribus non modi exercitationem fugiat vel animi minima, perferendis architecto. Nesciunt aperiam, sit iure corporis blanditiis quasi praesentium cumque! Necessitatibus."
              }
            />
            <Card
              image={Test}
              title={"Test"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error doloribus non modi exercitationem fugiat vel animi minima, perferendis architecto. Nesciunt aperiam, sit iure corporis blanditiis quasi praesentium cumque! Necessitatibus."
              }
            />
            <Card
              image={Test}
              title={"Test"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error doloribus non modi exercitationem fugiat vel animi minima, perferendis architecto. Nesciunt aperiam, sit iure corporis blanditiis quasi praesentium cumque! Necessitatibus."
              }
            />
            <Card
              image={Test}
              title={"Test"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error doloribus non modi exercitationem fugiat vel animi minima, perferendis architecto. Nesciunt aperiam, sit iure corporis blanditiis quasi praesentium cumque! Necessitatibus."
              }
            />
            <Card
              image={Test}
              title={"Test"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error doloribus non modi exercitationem fugiat vel animi minima, perferendis architecto. Nesciunt aperiam, sit iure corporis blanditiis quasi praesentium cumque! Necessitatibus."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talent;
