import React from "react";
import "./Cart.scss";
import test from "../../Assets/Followers-amico.png";
import BCA from "../../Assets/bca.png";
import GoPay from "../../Assets/gopay.png";
import OVO from "../../Assets/ovo.png";
import Shopee from "../../Assets/shopee.png";

function CartItem({ name, price }) {
  let [qty, setQty] = React.useState(0);

  function increment() {
    if (qty < 0) {
      setQty(0);
    }
    setQty(qty++);
  }

  function decrement() {
    if (qty >= 0) {
      setQty(qty--);
    }
  }

  return (
    <div className="cart-items">
      <img src={test} alt="" srcset="" className="img-cart" />
      <h3>{name}</h3>
      <h4>Rp. {price}</h4>
      <div className="cart-btn">
        <button onClick={decrement}>-</button>
        <p>{qty}</p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

const Cart = () => {
  return (
    <div className="container">
      <h2>Cart</h2>

      <div className="row">
        <div className="col-md-7 cart">
          <CartItem name="Test" price="90000" />
          <CartItem name="Test" price="90000" />
          <CartItem name="Test" price="90000" />
        </div>
        <div className="col-md-4">
          <div className="price">
            <h3>Total Amount : </h3>
            <h3>Admin Fee : </h3>
            <h3>Total Amount : </h3>
          </div>

          <div className="payment">
            <div class="form-group">
              <label for="coupon">Apply Coupon</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Coupon Here"
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" />
                  <label class="form-check-label" for="exampleCheck1">
                    <img src={BCA} alt="" srcset="" />
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" />
                  <label class="form-check-label" for="exampleCheck1">
                    <img src={Shopee} alt="" srcset="" />
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" />
                  <label class="form-check-label" for="exampleCheck1">
                    <img src={GoPay} alt="" srcset="" />
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" />
                  <label class="form-check-label" for="exampleCheck1">
                    <img src={OVO} alt="" srcset="" />
                  </label>
                </div>
              </div>
            </div>
            <div className="btn-group">
              <button type="button" className="btn">
                <a href="/payment">Checkout</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
