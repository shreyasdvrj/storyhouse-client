import React, { useEffect, useState } from "react";
import axios from "axios";
import "./cart.css"

const Itemcard = ({ props,index,userid}) => {
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

  const handleRemoveFromCart = (id,userid) => {
    axios({
      method: "POST",
      url: "https://storyhouse-bookstore.herokuapp.com/cart/removeProduct",
      data: { userid:userid, index: id },
      withCredentials: true,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.data.msg)
       
      })
      .catch(function (error) {
        console.log(error);
      });
      window.location.reload(); 
  }
  const price = String(props[2]);
  return (
    <div className="cart-items">
      <div className="cart-item" key={book._id}>
        <div className="cart-product">
          <img src={book.coverImg} alt={book.title} />
          <div>
            <h3>{book.title}</h3>
            <button
             onClick={() => handleRemoveFromCart(index,userid)}
            >
              <span style={{color: 'red'}}>Remove</span>
            </button>
          </div>
        </div>
        <div className="cart-product-price">&#8377;{price}</div>
        <div className="cart-product-quantity">
          {/* <button onClick={() => handleDecreaseCart(book)}>
                      -
                    </button> */}
          <div className=""><p>{props[1]}</p></div>
          {/* <button onClick={() => handleAddToCart(book)}>
                      +
                    </button> */}
        </div>
        <div className="cart-product-total-price">&#8377;{price}</div>
      </div>
    </div>
  );
};

export default Itemcard;
