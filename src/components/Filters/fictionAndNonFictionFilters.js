import React, { useState, useEffect } from "react";
import { MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { Query } from "mongoose";
import './filters.css'

function FictionAndNonFictionFilters({ getFilter }) {
  const [userinfo, setUserInfo] = useState({
    genres: [],
    response: [],
  });
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState({
    startPrice: "",
    endPrice: "",
  });
  var hashmap = new Map();
  const handleChange = (e) => {
    // Destructuring
    setQuery("");
    const { value, checked } = e.target;
    const { genres } = userinfo;

    hashmap[value] = checked;
    //query = `https://storyhouse-bookstore.herokuapp.com/books/find?fiction=true`
    Object.keys(hashmap).map((k) => {
      if (hashmap[k] == true) setQuery(query + `&${k}=${hashmap[k]}`);
    });

    // setQuery(query+ `&${value}=${checked}`)
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        genres: [...genres, value],
        response: [...genres, value],
      });
    }

    //Case 2  : The user unchecks the box
    else {
      setUserInfo({
        genres: genres.filter((e) => e !== value),
        response: genres.filter((e) => e !== value),
      });
    }
  };
  const handleChangeNumber = (e) => {
    const { name, value } = e.target;
    setPrice({
      ...price, //spread operator
      [name]: value,
    });
  };
  const { startPrice, endPrice } = price;
  const sendQuery = () => {
    getFilter(query);
  };

  const clickQuery = async () => {
    setQuery(query + `&startPrice=${startPrice}&endPrice=${endPrice}`);
  };

  return (
    <div>
      <p className="filterHeading">Categories</p>

      <MDBCheckbox
        name="genres"
        value="fiction"
        label="Fiction"
        onChange={handleChange}
      />
      <MDBCheckbox
        name="genres"
        value="nonfiction"
        label="Non Fiction"
        onChange={handleChange}
      />
      <p></p><p></p><p></p><p></p><p></p>
      <p className="filterHeading">Price</p>
      <input
        type="number"
        name="startPrice"
        value={price.startPrice}
        placeholder="Start Price"
        label="Starting Price"
        id="typeNumber"
        onChange={handleChangeNumber}
        style={{width: '80%'}}
      />
      <p></p>
      <input
        type="number"
        name="endPrice"
        value={price.endPrice}
        placeholder="End Price"
        label="Ending Price"
        id="typeNumber"
        onChange={handleChangeNumber}
        style={{width: '80%'}}
      />
       <div style = {{ display: "flex", marginTop: '5%'}}>
      <button className = "b1" style={{marginLeft: '0px'}} onClick={clickQuery}>Set Price</button>
      <button className = "b1" style={{marginLeft: '10px'}} onClick={sendQuery}>Apply Filters</button>
      </div>
    </div>
  );
}

export default FictionAndNonFictionFilters;
