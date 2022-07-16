const express = require('express');
const router = express.Router();

/*##############******controller for the landing page*****####################*/
const fileController = require('../controllers/file_controller');

/*##############******routes for upload and delete the file*****####################*/
router.post("/", fileController.uploads);
router.get('/delete/:file', fileController.delete);
router.use('/view', require('./viewFile'))

module.exports = router;