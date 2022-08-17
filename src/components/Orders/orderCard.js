import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Cart/cart.css"

const OrderCard = ({ props}) => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios({
      method: "POST",
      url: "https://storyhouse-bookstore.herokuapp.com/books/bookid",
      data: { bookid: props[0] },
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        setBook(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const price = String(props[2]);
  return (
    <div className="cart-items">
      <div className="cart-item" key={book._id}>
        <div className="cart-product">
          <img src={book.coverImg} alt={book.title} />
          <div>
            <h3>{book.title}</h3>
          </div>
        </div>
        <div className="cart-product-price">&#8377;{price}</div>
        <div className="cart-product-quantity">
          <div className=""><p>{props[1]}</p></div>
        </div>
        <div className="cart-product-total-price">&#8377;{price}</div>
      </div>
    </div>
  );
};

export default OrderCard;
