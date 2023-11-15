import "./Payment.scss";
import QR from "../../Assets/qr-code.png";

const Payment = () => {
  return (
    <div className="container">
      <h2 className="py-4">Payment</h2>
      <div className="row">
        <div className="col-md-5">
          <div className="qr-content">
            <img src={QR} alt="" />
          </div>
        </div>
        <div className="col-md-7">
          <div className="virtual-payment">
            <h3>Virtual Account Number</h3>
            <h3>1234567890123456</h3>
          </div>
          <div className="total-payment">
            <h3>Total Amount : </h3>
            <h3>Admin Fee : </h3>
            <h3>Total Amount : </h3>
            <button className="btn"><a href="/payment-status">Pay Now</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
