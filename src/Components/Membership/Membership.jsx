import "./Membership.scss";

const Membership = () => {
  return (
    <div class="row">
      <div class="col-md-4">
        <img src="https://media.istockphoto.com/id/1346370830/photo/todays-unboxing.webp?b=1&s=170667a&w=0&k=20&c=yxmnfmTQlkgR5RtMRyGwYq3YreTgZgHZtxGHjPN-lfw=" alt="membership" />
      </div>
      <div class="col-md-8">
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
