//requiring dependencies
var fs = require('fs');
var teamController = {};

//Get to return team data, no params
// GET: http://localhost:3000/teams/data
teamController.getData = (req, res) => {
    try {
        //reading team data from teams.json file
        res.end(fs.readFileSync('./data/teams.json'));
    } catch (err) {
        res.end('[]');
    }
};

module.exports = teamController;
