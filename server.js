const express = require('express');
//const cors = require('cors');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, bookName: 'Algorithms, 4th Edition', tags: 'Algorithms', image: 'https://unsplash.it/250/190?random'},
    {id: 2, bookName: 'Teaching Danish', tags: 'Languages', image: 'https://unsplash.it/250/190?random'},
    {id: 3, bookName: 'Greek', tags: 'Languages', image: 'https://unsplash.it/250/190?random'},
    {id: 4, bookName: 'Spanish', tags: 'Languages', image: 'https://unsplash.it/250/190?random'},
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