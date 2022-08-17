import React, { useState, useEffect, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductCard from "../../components/Product/productCard";
import axios from "axios";
import "../../components/Filters/filters.css";
import Pagination from "react-js-pagination";
import FictionAndNonFictionFilters from "../../components/Filters/fictionAndNonFictionFilters";
import "../AllBooks/allBooks.css"
import { StackedCarousel } from 'react-stacked-carousel'
import 'react-stacked-carousel/dist/index.css';

const str_bestsellers =
  "These bestselling books should be on everyone's reading list";
function Bestsellers() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState("");
  const [activePage, setActivePage] = useState(1);
 

  const handlePageChange = (activePage) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    console.log(`active page is ${activePage}`);
    axios
      .get(`https://storyhouse-bookstore.herokuapp.com/books/find?page=${activePage}&limit=20&${genres}&bestseller=true`)
      .then(response => {
        setBooks(response.data.book);
      });
    setActivePage(activePage);
  };

  useEffect(() => {
    const axiosBooks = async () => {
      const response = await axios(
        `https://storyhouse-bookstore.herokuapp.com/books/find?page=1&limit=20${genres}&bestseller=true`
      )
      setBooks(response.data.book);
    };
    
    axiosBooks();
  }, [genres]);

  return (
    <div>
      <Header />
      <Navbar />
      <TopBar name="Shop Bestsellers" value={str_bestsellers}></TopBar>
      <div style={{ "margin-bottom": "5%" }}>
        <div style={{ display: "flex" }}>
          <div className="filters">
            <FictionAndNonFictionFilters getFilter={setGenres}></FictionAndNonFictionFilters>
          </div>
          <div style={{ display: "flex", "flex-wrap": "wrap" }}>
            
            {books &&
              books.map((book) => <ProductCard props={book}></ProductCard>)}
          </div>
        </div>
      </div>
      <Pagination
          activePage={activePage}
          itemsCountPerPage={20}
          totalItemsCount={20}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      <FooterPage />
    </div>
  );
}

export default Bestsellers;
