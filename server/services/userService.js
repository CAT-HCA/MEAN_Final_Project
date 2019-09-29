const User = require("../db/connection").User;

// The Service uses the Sequelize ORM for DB CRUD operations
// and returns results to the calling Controller

var userService = {};

userService.listUsers = () => {
	return User.findAll()
		.then(users => {
			return users;
		})
		.catch(error => {
			throw error;
		});
};

userService.listUser = id => {
	return User.findByPk(id)
		.then(user => {
			return user;
		})
		.catch(error => {
			throw error;
		});
};

userService.register = userObj => {
	console.log("made it to register userService");
	return User.create(userObj)
		.then(user => {
			return user;
		})
		.catch(error => {
			throw error;
		});
};

userService.login = userObj => {
	console.log("made it to login userService");
	return User.findOne({
		where: userObj,
	})
		.then(user => {
			return user;
		})
		.catch(error => {
			throw error;
		});
};

userService.update = (id, userObj) => {
	return User.update(userObj, { returning: true, where: { id: id } })
		.then(user => {
			return user;
		})
		.catch(error => {
			throw error;
		});
};

userService.delete = id => {
	return User.destroy({ where: { id: id } })
		.then(user => {
			return user;
		})
		.catch(error => {
			throw error;
		});
};

module.exports = userService;
