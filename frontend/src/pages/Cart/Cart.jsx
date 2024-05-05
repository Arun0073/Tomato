import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast'

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, food_list, remFromCart, getTotalCartAmount,url } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => remFromCart(item._id)} className="crocs">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Carts Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount() === 0 ? "0" : getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? "0" : "2"}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Total</p>
              <p>
                ${getTotalCartAmount() === 0 ? "0" : getTotalCartAmount() + 2}
              </p>
            </div>
          </div>
            <button onClick={()=> getTotalCartAmount()===0? toast.error(" Please Add atleast one item"): navigate("/order")}>
              PROCEED TO CHECKOUT
            </button>
            <Toaster/>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="promo code" />
              <button>Apply code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
