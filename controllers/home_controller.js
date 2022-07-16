const Csv = require('../models/csv');

/*##############******action to render all the file to home page*****####################*/
module.exports.home = async function(req, res) {
    try {
        let files = await Csv.find({});
        res.render('index', {
            file: files
        });
    } catch(err) {
        console.log(err);
    }
}