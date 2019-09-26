var fs = require('fs');
var leagueController = {};


// GET: http://localhost:3000/leagues/data
leagueController.getLeaguesData = (req, res) => {
	try {
		res.end(fs.readFileSync("./data/leagues.json"));
	} catch (err) {
		res.end("[]");
	}
};

module.exports = leagueController;
