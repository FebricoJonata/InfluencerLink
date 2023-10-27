import Success from "../../../Assets/success.png";
import "./PaymentStatus.scss";

const PaymentStatus = () => {
  return (
    <div className="container text-center">
      <div className="payment-status">
        <img src={Success} alt="success-logo" />
        <h2 className="text-align-center">Payment Successfully</h2>
        <button class="btn">
          <a href="/">Done</a>
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;
