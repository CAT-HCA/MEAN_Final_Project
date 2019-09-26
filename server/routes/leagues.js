var express = require("express");
const api = require('../controllers/leagues');
var router = express.Router();


// GET http://localhost:3000/leagues/data
router.get("/data", api.getLeaguesData);

module.exports = router;
