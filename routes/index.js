const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

/*##############******routes for home page*****####################*/
router.get('/', homeController.home);
router.use('/file', require('./file'));


module.exports = router;