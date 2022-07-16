const express = require('express');

const app = express();

const port =  process.env.PORT || 8000;
const db = require("./config/mongoose");

app.use(express.urlencoded());

app.use(express.static("./assets"));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/', require('./routes/index'));

app.listen(port, function(err) {
    if(err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});