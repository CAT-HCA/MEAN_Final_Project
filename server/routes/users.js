var express = require("express");
const api = require("../controllers/user");
var router = express.Router();

// GET http://localhost:3000/users/data
router.get("/data/", api.getAllData);

// GET http://localhost:3000/users/data/{id}
router.get("/data/:id", api.getData);

// POST http://localhost:3000/users/register
router.post("/register/", api.register);

// POST http://localhost:3000/users/login
router.post("/login/", api.login);

// PUT http://localhost:3000/users/update/{id}
router.put("/update/:id", api.update);

// DELETE: http://localhost:3000/delete/{id}
router.delete("/delete/:id", api.delete);

// GET: http://localhost:3000/users/logout
router.get("/logout", api.logOut);

module.exports = router;
