import React, {useState, useEffect, useMemo} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";
import ProductCard from "../../components/Product/productCard";
import axios from 'axios';
import GenreFilters from "../../components/Filters/genreFilters";
import "../../components/Filters/filters.css";
import Pagination from "react-js-pagination";

const str_fiction =
  "Explore from our collection of classic masterpieces, contemporary and scientific themes, and unforgettable stories.";
 
function ExploreFiction() {

  const [books, setBooks] = useState( [] );
  const [genres, setGenres] = useState('');
  const [activePage, setActivePage] = useState(1);
  
  const handlePageChange = (activePage) => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    console.log(`active page is ${activePage}`);
    axios
      .get(`https://storyhouse-bookstore.herokuapp.com/books/find?fiction=true&page=${activePage}&limit=20&${genres}`)
      .then(response => {
        setBooks(response.data.book);
      });
    setActivePage(activePage);
  };
  
  useEffect(() => {
    const axiosBooks = async () => {
      const response = await axios(`https://storyhouse-bookstore.herokuapp.com/books/find?fiction=true&page=1&limit=20${genres}`);
      setBooks(response.data.book);
    };
    axiosBooks();
  }, [genres]);
  
    return (
      <div>
        <Header />
        <Navbar />
        <TopBar name="Shop Fiction" value={str_fiction}></TopBar>
        <div style={{ "margin-bottom": "5%" }}>
          <div style={{ display: "flex" }}>
            <div className="filters">
              <GenreFilters getFilter = {setGenres}></GenreFilters>
            </div>
            <div style={{ display: "flex", "flex-wrap": "wrap" }}>
            {books && books.map((book) => (

<ProductCard props = {book} ></ProductCard>
))} 
            </div>
          </div>
        </div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={20}
          totalItemsCount={61}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
        <FooterPage />
      </div>
    );
  }


export default ExploreFiction;
