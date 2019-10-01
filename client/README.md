
## Site Pages:
```
- Index Page
http://localhost:4200/
- Login Page
http://localhost:4200/users/login
- Register Page
http://localhost:4200/users/register
- Update Page (cannot access unless logged in)
http://localhost:4200/user/update
- Leagues Page (cannot access unless logged in)
http://localhost:4200/leagues
- Admin Page (cannot access unless logged in and user is an admin)
http://localhost:4200/users/admin
```

## Technologies
- HTML5/CSS3/Bootstrap4
- Angular
- Node.js

# Steps to create
## Load App

+ In the Terminal, in the client dir, execute the following:
```
$ cd client
$ ng serve
...
webpack: Compiled successfully.
```
- To view the home page in the browser, you would go to:
http://localhost:4200/

## Modify App
+ In the Terminal, in the client dir, execute the following to install Bootstrap:
```
`npm install bootstrap --save` ;
`npm install --save @ng-bootstrap/ng-bootstrap` ;

+ bootstrap@4.3.1
added 1 package from 2 contributors and audited 17092 packages in 18.593s
found 0 vulnerabilities
```

+ Open .angular.json and modify the "styles" property to the following

```
  "styles": [
          "./node_modules/bootstrap/dist/css/bootstrap.min.css",
          "styles.css"
        ]
```

+ Reload the page to confirm Bootstrap has been applied.

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Further help

To get more help on the Angular CLI

### Credits
* Steve Ramos
* Pamela Belknap
* Nghia Vu
