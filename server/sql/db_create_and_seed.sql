create database hca;
use hca;

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

INSERT INTO Users (user_name, email, password, is_admin) VALUES ('Admin', 'admin@test.com', 'password', 1);

select * from USERS;