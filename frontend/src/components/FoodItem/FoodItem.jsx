import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import toast,{Toaster} from 'react-hot-toast'


const FoodItem = ({ id, price, name, image, description }) => {
  const { cartItems, addToCart, remFromCart, url } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <button className="add" onClick={() => {addToCart(id); toast.success("Added to Cart!")}}>
            <img src={assets.add_icon_green} alt="" />
            <Toaster
              background="transparent"
            />
          </button>
        ) : (
          <div className="food-item-counter">
            <button onClick={() => {remFromCart(id); toast.error("Removed from Cart!")}}>
              <img src={assets.remove_icon_red} alt="" />
            </button>
            <p>{cartItems[id]}</p>
            <button onClick={() => {addToCart(id); toast.success("Added to Cart!")}}>
              <img src={assets.add_icon_green} alt="" />
            </button>
          </div>
        )}
      </div>
      <div className="food-info">
        <div className="food-item-name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-desc">{description}</p>
        <p className="food-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
