DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE employee_department(
    dep_id INT NOT NULL,
    dep_name VARCHAR(30),
    PRIMARY KEY (dep_id)
);
CREATE TABLE employee_role(
	dep_id INT NOT NULL,
    role_id INTEGER,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    PRIMARY KEY (role_id),
    FOREIGN KEY (dep_id) REFERENCES employee_department(dep_id)
);

CREATE TABLE employee(
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY Key(id),
    FOREIGN KEY (role_id) REFERENCES employee_role(role_id)
);