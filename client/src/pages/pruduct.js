import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import './pruduct.css';
import './useViewport.js';
import useViewport from "./useViewport.js";
import axios from "axios";

const Product = () => {
    const location = useLocation();
    const book = location.state.book;
    const [customers, setCustomers] = useState([]);
    const { width } = useViewport();
    const breakpoint = 768;
    let count = 0;
    
    const addToCart = (event) => {
        event.preventDefault();
        console.log("Add " + book.id);

        axios
        .post("/api/cart", { id: book.id })
        .then(() => alert("Added to cart"))
        .catch((err) => {
            console.log(err);
        });
    } 

	useEffect(() => {
		fetch("/api/customers")
			.then(res => res.json())
			.then(customers => setCustomers(customers));
	})
    if (width > breakpoint) { // for desktop
    return (
        <div className="container">
        <div className="row">
            <div className="col s9">
                <div className="row">
                    <div className="col s4">
                        <img id="book_img" src={book.image} style={{ borderradius: 20 }}></img>
                    </div>
                    <div className="col s8">
                        <h1>{book.bookName}</h1>
                        <p>{book.about}</p>
                        <p>Author: {book.author}</p>
                        <p>ISBN: {book.isbn}</p>


                    </div>
                </div>
                <div id="other_books" className="row">
                    <h4 className="center">Other books</h4>
                    <div className="row">
						{customers.map((customer) => {
                            if (customer.id != book.id && count < 4) {
                                count++;
                                return (
                                <div key={customer.id} className="col s6 m3">
                                    <Link 
                                        to = "/product"
                                        state={{
                                            book: customer
                                        }}
                                    >
                                    <div className="card bRad">
                                        <div className="card-image waves-effect waves-block waves-light bRadT">
                                        <img src={customer.image} />
                                        </div>
                                        <div className="card-content">
                                        <span className="card-title white-text text-darken-4">
                                        {customer.bookName}<i className="material-icons right">more_vert</i>
                                            </span>
                                            <p><a className="book-tag" href="#">{customer.tags}</a></p>
                                            <a className="btn-floating halfway-fab waves-effect waves-light red">
                                            <i className="material-icons">favorite</i></a>
                                        </div>
                                    </div>
                                    </Link>
                                </div>);
                            };
						})}
						
					</div>
                </div>
            </div>
            <div className="col s3">
                <div className="row">
                    <div id="add_to_cart_area">
                        <ul>
                            {customers.map((customer) => {
                                if (customer.id === book.id) {
                                return <li>Price: {customer.price} </li>
                                }
                            })}
                            
                            <li>Price new: </li>
                        </ul>
                        <button id="add_to_cart_button" className="btn waves-effect waves-light" onClick={addToCart}>Buy</button>
                    </div>
                </div>
                <div className="row">
                    <div id="about_seller">
                        <h5>Book condition</h5>
                        
                        <p>//Add info about seller??</p>
                        <p>Ads perhaps</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
    } else { // for mobile
        return (
        <div className="container">
        <div className="row">
            <div className="col s12">
                <div className="row">
                    <div className="col s5">
                        <img id="book_img" src={book.image} style={{ borderradius: 20 }}></img>
                    </div>
                    <div className="col s7">
                        <h4 id="title">{book.bookName}</h4>
                        <p>{book.about}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <div className="row">
                    <div id="add_to_cart_area">
                        <ul>
                            <li>Price from new: //TODO add prices to books</li>
                            <li>Price new: //TODO add prices</li>
                        </ul>
                        <button id="add_to_cart_button" className="btn waves-effect waves-light" onClick={addToCart}>Buy</button>
                    </div>
                </div>
                <div className="row">
                    <div id="about_seller">
                        <h5>About seller</h5>
                        <p>//Add info about seller??</p>
                        <p>Ads perhaps</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    };
}


export default Product;