import "./Membership.scss";
import Logo from "../../Assets/Followers-amico.png";

const Membership = () => {
  return (
    <div class="row">
      {/* <div class="col-md-4">
        <img src="https://media.istockphoto.com/id/1346370830/photo/todays-unboxing.webp?b=1&s=170667a&w=0&k=20&c=yxmnfmTQlkgR5RtMRyGwYq3YreTgZgHZtxGHjPN-lfw=" alt="membership" />
        <img src={Logo}></img>
      </div> */}
      <div class="d-flex content">
        <div className="membership-content">
          <h1>Join Our <span>Membership</span>
          </h1>
          <p>Receive exclusive deals, discounts and many offers.</p>
          <input
            type="text"
            placeholder="Enter your email"
            class="form-control"
          />
          <br />
          <button class="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
