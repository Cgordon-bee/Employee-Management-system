const inquirer = require("inquirer");


inquirer
  .prompt([

{   type: "list",
    name: "start",
    message: "what would you like to view",
    Choices: ["View all Departments", "View all Roles", "View All Employee", "View All Employee by Departments", "Add Employees", "Delete Employees", "Add New Department"]
},
  ])

.then(function (response) {
  switch (response.start) {

    case "View All Departments":
      displayDepartments();
      break;

    case "View All Roles":
      viewRoles();
      break;

    case "View All Employees":
      viewEmplyees();
      break;

    case "View All Employees By Department":
      displayEmByDep();
      break;

    case "Add Employee":
      addEmployee();
      break;

    case "Delete Employee":
      removeEmployee();
      break;

    case "Update Employee Role":
      updateEmpRole();
      break;

    case "Add Employee Role":
      addRole();
      break;

    case "Remove Role":
      removeRole();
      break;

    case "Add New Department":
      addDepartment();
      break;

    case "Remove Department":
      removeDept();
      break;

    case "Update Employee Manager":
      updateEmpManager();
      break;
  }
})

.then((answers) => {
  // Use user feedback for... whatever!!
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});



