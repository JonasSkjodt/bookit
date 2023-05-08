const express = require('express');
//const cors = require('cors');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, bookName: 'C++', tags: 'Algorithms', image: 'c++book.png'},
    {id: 2, bookName: 'C++', tags: 'Programming', image: 'c++book.png'},
    {id: 3, bookName: 'C++', tags: 'Programming', image: 'c++book.png'},
    {id: 4, bookName: 'C++', tags: 'Programming', image: 'c++book.png'},
  ];

  res.json(customers);
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