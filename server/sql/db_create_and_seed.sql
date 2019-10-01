create database HCA;
use HCA;

create table USERS (
	id		 	int(10) NOT NULL AUTO_INCREMENT, 
	user_name 	varchar(255) NOT NULL, 
	email 		varchar(255) NOT NULL, 
    password	varchar(255) NOT NULL,
	is_admin	smallint(1) NOT NULL DEFAULT 0,
	createdAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE		UQ_USER_1 (user_name),
	UNIQUE		UQ_USER_2 (email),
	PRIMARY KEY(ID)
);

#insert into USERS (user_name, email, password, is_admin) values ('Admin', 'Admin@test.com', 'password', 1);
#insert into USERS (user_name, email, password, is_admin) values ('user', 'user@test.com', 'password', 0);
#insert into USERS (user_name, email, password, is_admin) values ('userDelete', 'delete@test.com', 'password', 0);
#SELECT * FROM USERS;
#SELECT * FROM USERS WHERE user_name = 'user';
#SELECT * FROM USERS WHERE is_admin = '0';
#UPDATE USERS SET email = 'abc@123.com' WHERE id = 3;
#DELETE FROM USERS WHERE id =  '3';