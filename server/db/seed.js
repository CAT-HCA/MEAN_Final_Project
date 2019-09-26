const connection = require("./connection");
const userData = require("./seed_data/users.json");

connection.User.destroy({ where: {} }).then(() => {
	connection.User.bulkCreate(userData).then(() => {
		process.exit();
	});
});
