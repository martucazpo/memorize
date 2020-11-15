const express = require("express");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('../server/routes');
require('./connect/dbConnect');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(routes);


app.listen(PORT, () => console.log(`The server listens on port ${PORT}`));