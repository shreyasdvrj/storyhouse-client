import React from "react";
import './productDetail.css';
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductInfo from "./productInfo";
import ReviewSection from "./reviewSection";
import {useLocation} from 'react-router-dom';

const ProductDetail =() => {
    
    const location = useLocation()
    const {bookDetail} = location.state

        return (
            <div>
                <Header></Header>
                <Navbar></Navbar>
                <div className="product-div">
                    <div className="product-image-div">
                        <img className="product-image" src={bookDetail.props.coverImg} />
                    </div>
                    <div className="product-info-div">
                        <ProductInfo book={bookDetail.props}/>
                    </div>

                </div>
                <ReviewSection book={bookDetail.props}></ReviewSection>
                <FooterPage></FooterPage>
            </div>

        );
    
}

export default ProductDetail;
