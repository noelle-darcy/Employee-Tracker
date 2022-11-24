const mysql = require('mysql'); 
// const inquirer = require('inquirer');
const constoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost', 
    port: 3306, 
    user: 'root', 
    password: 'nRd!12272002',
    database: 'employeeDB'
});

connection.connect(function (err) {
    if (err) throw err; 
    menu();
});

function menu () {
    inquirer.createPromptModule([{
        type: 'list', 
        message: 'What would you like to do?',
        name: 'menuChoice', 
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }]).then (function (userInput) {
        switch (userInput.menuChoice) {
            case 'view all departments':
            view("department");
            break;

            case 'view all roles':
            view("role");
            break;

            case 'view all employees': 
            view("employee");
            break; 

            case 'add a department':
            addDepartment(); 
            break;

            case 'add a role':
            addRole(); 
            break; 

            case 'add an employee':
            addEmployee(); 
            break; 

            case 'update an employee role':
            updateEmployee(); 
            break; 
        }
    })
}