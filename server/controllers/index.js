var indexController = {};

// GET http://localhost:3000/
indexController.getIndex = (req, res) => {
	res.render("index", { title: "Home" });
};

module.exports = indexController;


