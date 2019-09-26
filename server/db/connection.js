const Sequelize = require("sequelize");

const sequelize = new Sequelize("hca", "hca", "password", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
});

const User = sequelize.import("../models/user");

sequelize.authenticate().then(() => {
    console.log("connected");
});

module.exports = {
    Sequelize,
    sequelize,
    User
};