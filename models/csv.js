const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const FILES_PATH = path.join("/uploads/files");

/*##############******Schema of the csv file*****####################*/
const csvSchema = new mongoose.Schema({
    filePath: {
        type: String
    },
    originalName: {
        type: String
    },
    file: {
        type: String
    }
}, {
    timestamps: true
});

/*##############******using multer to upload the file*****####################*/
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "..", FILES_PATH));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

csvSchema.statics.uploadedFile = multer({ storage: storage }).single("file");
csvSchema.statics.filePath = FILES_PATH;

const CsvFile = mongoose.model('CsvFile', csvSchema);

module.exports = CsvFile