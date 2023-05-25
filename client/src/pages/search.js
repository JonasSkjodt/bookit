import { React, useState } from "react";
import List from "./list";

const Search = () => {
	const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
return (
	<div className="container">
	<h1>search page</h1>
	<div className="search">
        <input id="outlined-basic" className="white-text" onChange={inputHandler} variant="outlined" fullWidth label="Search"/>
    </div>
    <List input={inputText} />
    </div>
);
};

export default Search;