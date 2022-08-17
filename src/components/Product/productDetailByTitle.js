import React, { useState, useEffect } from "react";
import './productDetail.css';
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductInfo from "./productInfo";
import ReviewSection from "./reviewSection";
import {useParams} from 'react-router-dom';
import axios from "axios";

function ProductDetailByTitle()  {
    
    const [books, setBooks] = useState([]);
    var {t} = useParams();
    
    // console.log("title", t);

    useEffect(() => {
      const axiosBooks = async () => {
        console.log("title",t);
        const response = await axios(
          `https://storyhouse-bookstore.herokuapp.com/books/byTitle?title=${t}`
        )
         
            setBooks(response.data);
         
        
        //console.log(books);
      };
      
      axiosBooks();
    },[]);

        return (
            <div>
                <Header></Header>
                <Navbar></Navbar>
               {
                console.log(books)
               }
                <div className="product-div">
                    <div className="product-image-div">
                        <img className="product-image" src={books.coverImg} />
                    </div>
                    <div className="product-info-div">
                        <ProductInfo book={books}/>
                    </div>

                </div>
                <ReviewSection book={books}></ReviewSection>
                <FooterPage></FooterPage>
            </div>

        );
    
}

export default ProductDetailByTitle;
