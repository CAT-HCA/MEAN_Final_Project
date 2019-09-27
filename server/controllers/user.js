//require customer user Service Module
var userService = require("../services/userService");
var UserController = {};

//get all user data
//no params
// GET: http://localhost:3000/users/data
UserController.getAllData = (req, res) => {
	userService
		.listUsers()
		.then(users => {
			if (users) {
				res.json(users);
			} else {
				res.json({ error: "No Users found" });
			}
		})
		.catch(err => {
			console.log(`Listing Users error: ${err}`);
			res.json({ error: "Listing Users error" });
		});
};

//get single user data by id
//param: pass id(integer) from query params
// GET: http://localhost:3000/users/data/{id}
UserController.getData = (req, res) => {
	userService
		.listUser(req.params.id)
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.json({ error: "No User found" });
			}
		})
		.catch(err => {
			console.log(`Listing User error: ${err}`);
			res.end("Listing User error.");
		});
};

// registering new user (user_name & email, unique)
//params: pass user object of user_name(string), password(string), email(string), is_admin(boolean)
// POST http://localhost:3000/users/register
UserController.register = (req, res) => {
	console.log("in user controller");
	userService
		.register({
			//req user data
			user_name: req.body.user_name,
			password: req.body.password,
			email: req.body.email,
			is_admin: req.body.is_admin,
		})
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.json({ error: "User not created" });
			}
		})
		.catch(err => {
			console.log(`Error creating user: ${err}`);
			res.end(`Creating User error.`);
		});
};

// logging in user
//params: pass user object of user_name(string), password(string)
// POST: http://localhost:3000/users/login
UserController.login = (req, res) => {
	console.log("in login user controller");
	userService
		.login({
			//req user data
			user_name: req.body.user_name,
			password: req.body.password,
		})
		.then(user => {
			if (user) {
				req.session.ID = user.ID;
				res.json(user);
			} else {
				res.json({ error: "Invalid credentials." });
			}
		})
		.catch(err => {
			console.log(`Reading User error: ${err}`);
			res.end("Reading User error.");
		});
};

// updating user email address
//params: pass user object of id(integer) from query params, email(string)
// PUT http://localhost:3000/users/update/{id}
UserController.update = (req, res) => {
	//req user data
	let id = req.params.id;
	let email = req.body.email;
	userService
		.update(id, { email: email })
		.then(user => {
			if (user) {
				res.json(user);
			} else {
				res.json({ error: "User not updated" });
			}
		})
		.catch(err => {
			console.log(`Updating User error: ${err}`);
			res.end("Updating User error.");
		});
};

//deleting user
//params: pass id(integer) from query params
// DELETE: http://localhost:3000/users/{id}
UserController.delete = (req, res) => {
	userService
		.delete(req.params.id)
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			console.log(`Deleting User error: ${err}`);
			res.end("Deleting User error.");
		});
};

// logging out user
// no params
// GET: http://localhost:3000/users/logout
UserController.logOut = (req, res) => {
	//clears session id
	req.session.ID = null;
	console.log(req.session.ID);
	res.redirect("/");
};

module.exports = UserController;
