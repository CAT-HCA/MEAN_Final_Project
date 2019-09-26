var express = require("express");
const api = require('../controllers/user');
var router = express.Router();


// GET http://localhost:3000/users/data/{id}
router.get("/data/", api.getAllData);

// GET http://localhost:3000/users/data/{id}
router.get("/data/:user_id", api.getData);

// POST http://localhost:3000/users/login
router.post("/login/", api.login);

// POST http://localhost:3000/users/register
router.post("/register/", api.register);

// PUT http://localhost:3000/users/update
router.put("/update/", api.update);

// DELETE: http://localhost:3000/delete/{id}
router.delete('/delete/:user_id', api.delete);

// GET: http://localhost:3000/users/logout
router.get('/logout', api.logOut);

module.exports = router;