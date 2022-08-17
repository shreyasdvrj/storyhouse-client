import React, { useState, useEffect } from "react";
import ProductCard from "../../components/Product/productCard";
import TopBar from "../../components/TopBar/topBar";
import Header from "../../components/Header/header";
import Navbar from "../../components/Navbar/navbar";
import FooterPage from "../../components/Footer/footer";

const str = "Search Results";
const SearchResult = (props) => {
  const [input, setInput] = useState("");
  const [bookListDefault, setBookListDefault] = useState();
  const [bookList, setBookList] = useState();
  const [keyword, setKeyword] = useState("");
  const fetchData = async () => {
    return await fetch("https://storyhouse-bookstore.herokuapp.com/books/search")
      .then((response) => response.json())
      .then((data) => {
        setBookList(data);
        setBookListDefault(data);
      });
  };

  const updateInput = async (input) => {
    const filtered = bookListDefault.filter((book) => {
      return book.title.toLowerCase().startsWith(input.toLowerCase());
    });
    setInput(input);
    setBookList(filtered);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeyword(value);
    console.log(keyword);
    updateInput(keyword);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <TopBar name="Shop All Books" value={str}></TopBar>
      <input
        style={{}}
        key="random1"
        value={keyword}
        placeholder={"Search"}
        onChange={handleChange}
      />
      <div style={{ "margin-bottom": "5%" }}>
        <div style={{ display: "flex", "flex-wrap": "wrap" }}>
          {bookList &&
            bookList.map((book) => <ProductCard props={book}></ProductCard>)}
        </div>
      </div>

      <FooterPage />
    </div>
  );
};

export default SearchResult;
