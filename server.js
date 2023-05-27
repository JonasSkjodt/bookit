const express = require("express");
//const cors = require('cors');

const app = express();

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

  res.status(201).json({some: "response"})
})

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
    id: req.body.bookID,
    bookName: req.body.bookTitle,
    bookAuthor: req.body.bookAuthor,
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
