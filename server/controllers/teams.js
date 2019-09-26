var fs = require('fs');
var teamController = {};

// GET: http://localhost:3000/users/logout
teamController.getData = (req, res) => {
    try {
        res.end(fs.readFileSync('./data/teams.json'));
    } catch (err) {
        res.end('[]');
    }
};



module.exports = teamController;
