import React from "react";

const SearchBox = ({ searchChange }) => {
   return (
     <div className="pa2 ma3">
        <input 
          className="pa3 ba b--green bg--lightest-blue"
          type="search"
          placeholder="search cats"
          onChange={searchChange}
          id="nameInput"
        />
      </div>  
    );
}

export default SearchBox;