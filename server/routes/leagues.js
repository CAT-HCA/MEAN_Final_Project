var express = require("express");
const api = require('../controllers/leagues');
var router = express.Router();


// http://localhost:3000/leagues
router.get("/", api.getLeagues);

// GET http://localhost:3000/leagues/data
router.get("/data", api.getLeaguesData);

module.exports = router;
