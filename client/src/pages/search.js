import { React, useState, useEffect } from "react";
import List from "./list";

const Search = () => {
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		fetch("/api/customers")
			.then(res => res.json())
			.then(customers => setCustomers(customers));
	})

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
				<input id="outlined-basic" className="white-text" onChange={inputHandler} variant="outlined" label="Search"/>
			</div>
			
			<List input={inputText} />
		</div>
	);
};

export default Search;