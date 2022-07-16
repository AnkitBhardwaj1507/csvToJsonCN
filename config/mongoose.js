const mongoose = require('mongoose');

/*##############***** connect to mongodb ******####################*/
mongoose.connect('mongodb+srv://ankitMongo:Ankit512507@cluster0.1fakdmm.mongodb.net/csvtojson_CN?retryWrites=true&w=majority', 
{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));

db.once("open", function() {
    console.log("Successfully connected to DB");
});