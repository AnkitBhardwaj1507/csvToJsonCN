const csv = require("csv-parser");
const Csv = require('../models/csv');
const fs = require("fs");

/*##############******action to open and view the file data*****####################*/
module.exports.view = async function(req, res) {
    
   /*##############******fetch the file from db*****####################*/
    const file= await Csv.findOne({file: req.params.file});

    const results = [];
    const header = [];

    /*##############******read the csv file and render the requred data*****####################*/
    fs.createReadStream(file.filePath)
     .pipe(csv())
     .on('headers', (headers) => {
        headers.map((head) => {
            header.push(head);
        });
     })
     .on('data', (data) => 
        results.push(data))
     .on('end', () => {
         
            res.render("file", {
               title: file.originalname,
               head: header,
               data: results,
               length: results.length,
            });
         });
}