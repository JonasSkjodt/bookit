/*dependencies
1: npm i express concurrently
2: npm i nodemon --save-dev
3: npm install express-fileupload
*/

const express = require("express");
//const cors = require('cors');
const app = express();
// enable files upload
const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  const { readFileSync } = require("fs");
  const data = readFileSync("./bookData.json");
  const customersTab = JSON.parse(data);
  const customers = [];
  for (let i = 0; i < customersTab.table.length; i++) {
    customers.push(customersTab.table[i]);
  }

  res.json(customers);
});

const { readFileSync } = require("fs");
const data = readFileSync("./userData.json");
const usersTab = JSON.parse(data);

// Define the user credentials
const users = [];
for (let i = 0; i < usersTab.table.length; i++) {
  users.push(usersTab.table[i]);
}

// Add the login route
//(use post because these are "sensitive data" which shouldnt be shown, change it to app.get to see how it otherwise looks)
app.get("/api/users", (req, res) => {
  const { readFileSync } = require("fs");
  const data = readFileSync("./userData.json");
  const usersTab = JSON.parse(data);
  const users = [];
  for (let i = 0; i < usersTab.table.length; i++) {
    users.push(usersTab.table[i]);
  }

  res.json(users);
});

app.post("/api/login", (req, res) => {
  const {
    body: { username, password },
  } = req;
  const user = users.map(
    (user) => user.id === username && user.password.toString() === password
  );

  // if credentials valid
  if (user.includes(true)) {
    console.log("User is logged in");
    res.json({
      message: `Welcome ${user.username}`,
      token: `${user.username}2023`,
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
    username: req.body.username,
    id: req.body.id,
    password: req.body.password,
    email: req.body.email,
  };
  users.push(newUser);
  console.log(users);

  require("fs").readFile(
    "userData.json",
    "utf8",
    function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push(newUser); //add some data
        json = JSON.stringify(obj); //convert it back to json
        require("fs").writeFile("userData.json", json, "utf8", (callback) => {
          console.log("saving user");
        }); // write it back
      }
    }
  );

  var obj = {
    table: [],
  };
  require("fs").readFile(
    "userData.json",
    "utf8",
    function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push(newUser); //add some data
        json = JSON.stringify(obj); //convert it back to json
        require("fs").writeFile("userData.json", json, "utf8", (callback) => {
          console.log("saving user");
        }); // write it back
      }
    }
  );
  res.status(201).json({ some: "response" });
});

//add the order posts
//empty array for storing the orders
let orders = [];

app.get("/api/order", function (req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const { readFileSync } = require("fs");
  const data = readFileSync("./orderData.json");
  const ordersTab = JSON.parse(data);
  const orders = [];
  for (let i = 0; i < ordersTab.table.length; i++) {
    orders.push(ordersTab.table[i]);
  }

  res.end(JSON.stringify(orders));
});

app.post("/api/order", function (req, res) {
  var newOrder = {
    FirstName: req.body.valueFirstName,
    LastName: req.body.valueLastName,
    Address: req.body.valueAddress,
    ZipCode: req.body.valueZip,
    City: req.body.valueCity,
    Country: req.body.valueCountry,
    Email: req.body.valueEmail,
    CardNumber: req.body.valueNumber,
    CardDateMM: req.body.valueDateM,
    CardDateYY: req.body.valueDateY,
    CardCVC: req.body.valueCVC,
    itemIDs: req.body.ids,
    username: req.body.username,
  };

  orders.push(newOrder);
  console.log(orders);

  require("fs").readFile(
    "bookData.json",
    "utf8",
    function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push(newOrder); //add some data
        json = JSON.stringify(obj); //convert it back to json
        require("fs").writeFile(
          "./orderData.json",
          json,
          "utf8",
          (callback) => {
            console.log("saving Order");
          }
        ); // write it back
      }
    }
  );
  res.status(201).json({ some: "response" });
});

const path = require("path");
//add the book posts
//empty array for storing the books
let books = [];

app.post("/api/customers", function (req, res) {
  var newBook = {
    id: req.body.id,
    bookName: req.body.bookName,
    bookAuthor: req.body.bookAuthor,
    price: req.body.price,
    isbn: req.body.isbn,
    condition: req.body.condition,
    //image: req.files.bookImg.name,
    username: req.body.username,
  };
  books.push(newBook);
  console.log(books);

  var obj = {
    table: [],
  };
  require("fs").readFile(
    "bookData.json",
    "utf8",
    function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data); //now it an object
        obj.table.push(newBook); //add some data
        json = JSON.stringify(obj); //convert it back to json
        require("fs").writeFile("bookData.json", json, "utf8", (callback) => {
          console.log("saving book");
        }); // write it back
      }
    }
  );

  res.status(201).json({ some: "response" });
});

/*app.post('/upload', (req, res) => {
  if (req.files) {
    //specify the file name to be stored 
    if (req.files && req.files.bookImg) {
      let bookImg = req.files.bookImg;
    
      bookImg.mv(
        path.resolve(__dirname, './client/public/images', bookImg.name),
        (err) => {
          if (err) return res.status(500).send(err);
          console.log('Image uploaded and stored');
     });
    }
  }
});*/

// Handeling the cart. Will reset when the server restarts
let cart = [];
app.post("/api/cart", (req, res) => {
  const cartItem = {
    id: req.body.id,
    bookName: req.body.bookName,
    price: req.body.price,
  };
  cart.push(cartItem);
  console.log("Added " + cartItem + "to the cart");

  res.status(200).json({ message: cartItem + " has been added to the cart" });
});

app.get("/api/cart", (req, res) => {
  res.json(cart);
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
