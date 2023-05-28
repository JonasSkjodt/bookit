import { React, useState, useEffect } from "react";
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
			<h1>Search page</h1>
			<div className="search  m-b">
				<input placeholder="Search BookIt..." id="outlined-basic" className="white-text" onChange={inputHandler} variant="outlined" label="Search"/>
			</div>
			
			<div className="row">
			<List input={inputText} />
			</div>
		</div>
	);
};

export default Search;