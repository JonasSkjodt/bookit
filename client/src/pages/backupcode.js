/*createbook.js
import React, { useState } from "react";
import axios from "axios";

const CreateBook = () => {
  const [id, setBookID] = useState("");
  const [bookName, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookImage, setimage] = useState(""); //image

  const handleInputChange = (e) => {
    if (e.target.name === "id") {
      setBookID(e.target.value);
    } else if (e.target.name === "bookName") {
      setBookTitle(e.target.value);
    } else if (e.target.name === "bookAuthor") {
      setBookAuthor(e.target.value);
    } else {
      setimage(e.target.value); // get the value of the image when the input changes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      id,
      bookName,
      bookAuthor,
      bookImage, // add the image state here
    };
    console.log(book);

    // create a formData object 
    const formData = new FormData();
    // append the book object to the formData
    formData.append('book', book);
    // append the uploaded file to the formData
    formData.append('bookImage', bookImage);

    axios
      .post("/api/create", formData)
      .then(() => console.log("Book Created"))
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="col s12 m8">
      <p>
        Want to sell your books? Fill out this form and we'll display it on
        BookIt.
      </p>
      <div className="book-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="id"
              placeholder="Book ID"
              value={id}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="bookName"
              placeholder="Book Title"
              value={bookName}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control white-text"
              name="bookAuthor"
              placeholder="Book Author"
              value={bookAuthor}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="form-group">
            <input
              type="file"
              className="form-control white-text"
              name="bookImage"
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div>
            <button className="btn btn-success" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;

/*server js

/*dependencies
1: npm i express concurrently
2: npm i nodemon --save-dev
3: npm install express-fileupload


const express = require("express");
//const cors = require('cors');


const app = express();
// enable files upload
const fileUpload = require('express-fileupload');


app.get("/api/customers", (req, res) => {

//   process.on('exit', function() {
//     var obj = {
//       table: []
//     };
//     customers.map((customer) => {
//       obj.table.push(customer);
//     });
//     var json = JSON.stringify(obj);
//     var fs = require('fs');
//     fs.writeFile('myjsonfile.json', json, (err) => err && console.error(err));
// });


// require('fs').readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
//       if (err){
//           console.log(err);
//       } else {
//       customers = JSON.parse(data); //now it an object
    
//   }
//   });
  const { readFileSync } = require('fs');
  const data = readFileSync('./bookData.json');
  const customersTab = JSON.parse(data);
  const customers = [];
  for(let i = 0; i < customersTab.table.length; i++) {
    customers.push(customersTab.table[i]);
  }


    res.json(customers);
});

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { readFileSync } = require('fs');
const data = readFileSync('./userData.json');
const usersTab = JSON.parse(data);

// Define the user credentials
const users = [];
for(let i = 0; i < usersTab.table.length; i++) {
  users.push(usersTab.table[i]);
}

// Add the login route
//(use post because these are "sensitive data" which shouldnt be shown, change it to app.get to see how it otherwise looks)
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/login", (req, res) => {
  const {
    body: { username, password },
  } = req;
  const user = users.find(
    (user) => user.id === username && user.password === password
  );

  // if credentials valid
  if (user) {
    console.log("User is logged in");
    res.json({
      message: `Welcome ${user.id}`,
      token: `${user.id}2023`,
      loggedIn: true,
    });
  } else {
    console.log("User is not logged in");
    res.json({
      message: "Invalid Credentials",
      loggedIn: false,
    });
  }
});

app.post("/api/signup", (req, res) => {
  console.log("Creating new user");
  let newUser = {
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    id: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  users.push(newUser);
  console.log(newUser);

  res.status(201).json({ some: "response" })
})

const uploadPath = 'upload';
const path = require('path');
//add the book posts
//empty array for storing the books
let books = [];

//specify the folder where you want to upload 
app.post('/upload', (req, res) => {
  if(req.files){
    //specify the file name to be stored 
    let bookImg = req.files.bookImg;
    //specify the path in the directory
    bookImg.mv(path.resolve(__dirname, './', uploadPath, bookImg.name), (err) => {
        if(err)
            return res.status(500).send(err);

        console.log('Image uploaded and stored');
    });
  }
});


app.get("/api/create", function (req, res) {
  console.log("Inside Create book Get");
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  console.log("Books : ", JSON.stringify(books));
  res.end(JSON.stringify(books));
});

app.post("/api/create", function (req, res) {
  var newBook = {
    BookID: req.body.bookID,
    Title: req.body.bookTitle,
    Author: req.body.bookAuthor,
    image: req.files.bookImg.name
  };
  books.push(newBook);
  console.log(books);

  var obj = {
    table: []
  };
  require('fs').readFile('bookData.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    obj.table.push(newBook); //add some data
    json = JSON.stringify(obj); //convert it back to json
    require('fs').writeFile('bookData.json', json, 'utf8', callback => {console.log("saving boo")}); // write it back 
}});

  res.status(201).json({ some: "response" });
});

//add the order posts
//empty array for storing the orders
let orders = [];

app.get("/api/order", function (req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  console.log("Orders : ", JSON.stringify(orders));
  res.end(JSON.stringify(orders));
});

app.post("/api/order", function (req, res) {
  var newOrder = {
    FirstName: req.body.valueFirstName,
    LastName: req.body.valueLastName,
    Email: req.body.valueEmail,
    CardNumber: req.body.valueNumber,
    CardDateMM: req.body.valueDateM,
    CardDateYY: req.body.valueDateY,
    CardCVC: req.body.valueCVC,
  };
  orders.push(newOrder);
  console.log(orders);

  res.status(201).json({ some: "response" });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);


npm init
entry point: server.js
npm i express concurrently
npm i nodemon --save-dev
under "scripts" in package.json
  "start": "node server.js",
  "server": "nodemon server.js",
  "client": npm start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\""
create the server.js
code the server.js
npm run server
  localhost:5000
npm i -g create-react-app
create-react-app client
under package.json inside react client,
add "proxy": "http://localhost:5000"
cd client
npm start
create new folder in src called components
create customers.js and customers.css
fill in the code to customers.js
import customers into app
choose icons from here: https://fonts.google.com/icons
*/
