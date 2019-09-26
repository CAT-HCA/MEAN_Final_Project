const User = require('../db/connection').User;

// The Service uses the Sequelize ORM for DB CRUD operations
// and returns results to the calling Controller

var userService = {};

userService.register = (userObj) => {
    console.log(userObj);
    return User
    .create(userObj)
    .then(user => {
        return user;
    })
    .catch(error => {
        throw error;
    })
};

userService.login = (userObj) => {
    console.log("made it to userService");
    return User.findOne({
            where: userObj
        })
        .then(user => {
                return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.update = (userObj) => {
    return User.update({ email: userObj.email}, { returning: true, where: { user_name: userObj.user_name, password: userObj.password} })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.delete = (user_Id) => {
    return User.destroy({ where: { id: user_Id } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        });
};

userService.listUser = (userId) => {
    return User.findByPk(userId)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.listUsers = () => {
    return User.findAll()
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};



module.exports = userService;
