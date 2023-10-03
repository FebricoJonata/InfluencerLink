import "./Membership.scss";

const Membership = () => {
  return (
    <div class="row">
      <div class="col-md-5 bg-warning">One</div>
      <div class="col-md-7">
        <div className="membership-content">
          <h1>
            Join Our&nbsp;<span> Membership</span>
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
