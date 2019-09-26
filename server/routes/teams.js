var express = require("express");
const api = require('../controllers/teams');
var router = express.Router();


// GET http://localhost:3000/teams/data
router.get('/data', api.getData);

module.exports = router;