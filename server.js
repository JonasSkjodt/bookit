const express = require("express");
//const cors = require('cors');

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    {
      id: 1,
      bookName: "C++",
      tags: "Algorithms",
      image: "c++book.png",
      about: "This is text about C++",
    },
    {
      id: 2,
      bookName: "Javascript",
      tags: "Programming",
      image: "javascriptbook.jpg",
      about: "This is text about Javascript",
    },
    {
      id: 3,
      bookName: "Java",
      tags: "Programming",
      image: "javabook.jpg",
      about: "This is text about Java",
    },
    {
      id: 4,
      bookName: "PHP",
      tags: "Programming",
      image: "phpbook.png",
      about: "This is text about PHP",
    },
  ];

  res.json(customers);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the user credentials
const users = [
  { id: "bob", password: "123" },
  { id: "jack", password: "456" },
  { id: "peter", password: "789" },
];

// Add the login route
//(use post because these are "sensitive data" which shouldnt be shown, change it to app.get to see how it otherwise looks)
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

//add the book posts
//empty array for storing the books
let books = [];

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
  };
  books.push(newBook);
  console.log(books);

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

/*
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
