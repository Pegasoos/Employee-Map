CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE employee_department(
    dep_id INT NOT NULL,
    dep_name VARCHAR(30),
    PRIMARY KEY (dep_id)
);
CREATE TABLE employee_role(
    role_id INTEGER,
    title VARCHAR(30),
    salary DECIMAL(10,10),
    PRIMARY KEY (role_id)
);

LEFT JOIN employee_department ON employee_role = employee_department.dep_id;

CREATE TABLE employee(
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    manager_id INT,
    PRIMARY Key(id)
)
LEFT JOIN employee_role ON empoyee = employee_department.role_id;
