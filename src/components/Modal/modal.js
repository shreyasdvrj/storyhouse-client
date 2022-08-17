import React from 'react';
import confirm from '../../assets/order.png';
import { Link } from "react-router-dom";
import "./modal.css"
import { CDBBtn } from 'cdbreact';

const Modal = ({ open, onClose, orderid }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img className='modalImg' src={confirm} alt='/' />
        <div className='modalRight'>
          <h4 className='modalText'>CONFIRMED</h4>
          <h6>Order No : #{String(orderid).slice(1,8)}</h6>
          <h6 className='modalBottom'>Thank you for shopping with us</h6><br/>
          <div className="continue-shopping" style={{marginLeft : '18%'}}>
                    <Link to="/all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                      <span className="info">Continue Shopping</span>
                    </Link>
                  </div>
          </div>
        </div>
      </div>
   
  );
};

export default Modal;