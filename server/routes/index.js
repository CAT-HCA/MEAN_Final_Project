var express = require('express');
const api = require('../controllers/index');
var router = express.Router();


/* GET home page. */
// http://localhost:3000
router.get('/', api.getIndex);


module.exports = router;