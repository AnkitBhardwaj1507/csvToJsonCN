const express = require('express');
const router = express.Router();

const viewController = require('../controllers/viewFile_controller');

/*##############******route for view the selected file*****####################*/
router.get('/:file', viewController.view);

module.exports = router;