/*##############*****require csv schema******####################*/
const Csv = require('../models/csv');

const path = require('path');
/*##############***** require path of saved file******####################*/
const FILE_PATH = path.join("/uploads/files");

/*##############*****action to upload the csv file using multer******####################*/
module.exports.uploads = function(req, res) {
    try {
        Csv.uploadedFile(req, res, function(err) {
            if(err) {
                console.log("Multer Error");
            }

            /*##############*****checking the file and its foemat******####################*/
            if(req.file && req.file.mimetype == "application/vnd.ms-excel" || req.file && req.file.mimetype == "text/csv") {
                Csv.create({
                    filePath: req.file.path,
                    originalName: req.file.originalname,
                    file: req.file.filename
                }, function(err) {
                    if(err) {
                        return res.status(400).json({
                            message: "Error in creating File"
                        });
                    }
                    return res.redirect("/");
                });
            }else {
                return res.redirect("/");
            }
        });
    }catch(err) {
        console.log(err);
    }
}

/*##############******action to delete the file*****####################*/
module.exports.delete = async function(req, res) {
    try {
        const filename = req.params.file;

        let isFile = await Csv.findOne({file: filename});
        if(isFile) {
            await Csv.deleteOne({file: filename});
            return res.redirect('/');
        }else {
            return res.redirect('/');
        }
    }catch(err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }

}