
# HCA server

This server is the back-end for the Angular version of our capstone project.

There are APIs to get user, league, and team data.  See below for routes and params.

##  Install Module

```
$ npm install
```

## PostgreSQL Setup

-   username: hca
    
-   password: password
    
-   creds: DBA
    
-   Create PostgreSQL DB User as defined above
    
-   Create a DB named 'hca' in PostgreSQL using  `pgAdmin4`
    
-   Execute the following to build and populate the DB with test data
    

```
$ cd db
$ node migrate
$ node seed
```

## Start Server

```
$ cd server
$ npm start
```

## Start Server in Inspect Mode

```
$ cd server
$ npm run dev
```

#### Users Routes
```
GET http://localhost:3000/users/data/
	- params: n/a
	- returns: array of all user objects
GET http://localhost:3000/users/data/:id
	- params: id (number)
	- returns: single user object
POST http://localhost:3000/users/register
	- params: user_name (string), password (string), email (string)
	- returns: registered user object
POST http://localhost:3000/users/login
	- params: user_name (string), password (string)
	- returns: boolean
PUT http://localhost:3000/users/update/:id
	- params: email (string), (id pulled using loginService)
	- returns: single user object
DELETE: http://localhost:3000/delete/:id
	- params: (id pulled using loginService)
	- returns: boolean
GET: http://localhost:3000/users/logout
	- params: n/a

#### Leagues Routes

GET http://localhost:3000/leagues/data
	- params: n/a
	- returns: array of all league data

#### Teams Routes

GET http://localhost:3000/teams/data
	- params: n/a
	- returns: array of all team data
```
### Test
```
$ npm start
```
Test using Included Postman Collection


### Useful link(s)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Express Generator](https://expressjs.com/en/starter/generator.html)
* [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](http://docs.sequelizejs.com/)

### Credits
* Steve Ramos
* Nghia Vu
* Pamela Belknap

