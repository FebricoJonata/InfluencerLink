import "./Benefit.scss";
import Policy from "../../Assets/policy.png";
import Customer from "../../Assets/customer.png";
import Payment from "../../Assets/payment.png";

const Benefit = () => {
  return (
      <div class="container" className="benefit-container">
        <h2 className="tittle">Benefit</h2>
        <div class="row">
          <div class="col">
            <img src={Payment} alt="" />
            <h3>Payment Method</h3>
            <p>We offer flexible payment options, to make easier.</p>
          </div>
          <div class="col">
            <img src={Policy} alt="" />
            <h3>Refund Policy</h3>
            <p>
              You can apply for refund within 30 days. If you not satisfied with
              the result
            </p>
          </div>
          <div class="col">
            <img src={Customer} alt="" />
            <h3>Customer Support</h3>
            <p>Our customer support is 24/7.</p>
          </div>
        </div>
      </div>
  );
};

export default Benefit;
