import React from 'react';
import { Link } from 'react-router-dom';


const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"10rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    
      <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    
  );
}

export default SearchBar
{/* <Link to="/all">
    <button onClick = {{fetchData}}>Search</button>
    </Link> */}
    