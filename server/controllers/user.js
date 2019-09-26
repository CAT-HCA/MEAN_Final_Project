//require customer user Service Module
var userService = require("../services/userService");

var UserController = {};



// POST http://localhost:3000/users/register
UserController.register = (req, res) => {
	console.log("in user controller");
	userService
		.register({
			user_name: req.body.username,
			password: req.body.password,
			email: req.body.email,
			is_admin: req.body.is_admin
		})
		.then(user => {
			console.log(user);
			res.json(user);
		})
		.catch(err => {
			console.log(`Error creating user: ${err}`);
			res.end(`Creating User error.`);
		});
};



// POST: http://localhost:3000/users/login
UserController.login = (req, res) => {
	console.log("in login user controller");
	userService
		.login({
			user_name: req.body.username,
			password: req.body.password,
		})
		.then(user => {
			console.log(user.ID);
			req.session.ID = user.ID;
			console.log(`session ID${req.session.ID = user.ID}`);
			res.json(user);
		})
		.catch(err => {
			console.log(`Reading User error: ${err}`);
			res.end("Reading User error.");
		});
};



// PUT http://localhost:3000/users/update
UserController.update = (req, res) => {
	userService
		.update({
			user_name: req.body.username,
			password: req.body.password,
			email: req.body.email,
		})
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			console.log(`Updating User error: ${err}`);
			res.end("Updating User error.");
		});
};

// GET: http://localhost:3000/users/logout
UserController.logOut = (req, res) => {
	req.session.ID = null;
	console.log(req.session.ID);
	res.redirect('/');
};

// DELETE: http://localhost:3000/users/{user_id} 
UserController.delete = (req, res) => {
    userService.delete(req.params.user_id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Deleting User error: ${err}`);
            res.end('Deleting User error.');
        });
};

// GET: http://localhost:3000/users/data/{id}
UserController.getData = (req, res) => {
    userService.listUser(req.params.user_id)
        .then((user) => {
			if(user){
			res.json(user);}
			else{
				res.json({"error": "No User found"});
			}
        })
        .catch((err) => {
            console.log(`Listing User error: ${err}`);
            res.end('Listing User error.');
        });
};

// GET: http://localhost:3000/users/data
UserController.getAllData = (req, res) => {
    userService.listUsers()
	.then((users) => {
		if (users) {
			res.json(users);
		} else {
			res.json({ "error": "No Users found" });
		}
	})
	.catch((err) => {
		console.log(`Listing Users error: ${err}`);
		res.json({ "error": "Listing Users error" });
	});
};



module.exports = UserController;
