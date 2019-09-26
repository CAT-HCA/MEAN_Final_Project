//requiring dependencies
var fs = require('fs');
var leagueController = {};

//Get to return league data, no params
// GET: http://localhost:3000/leagues/data
leagueController.getLeaguesData = (req, res) => {
	try {
		//reading league data from leagues.json file
		res.end(fs.readFileSync("./data/leagues.json"));
	} catch (err) {
		res.end("[]");
	}
};

module.exports = leagueController;
