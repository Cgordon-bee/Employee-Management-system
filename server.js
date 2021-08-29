const express = require('express');
const path = require('path');
const fs = require("fs");
const util = require("util");
const inquirer =require("inquirer");
const msql =require("msql");
const Choices = require('inquirer/lib/objects/choices');

//inquirer imported for questions 


inquirer
  .prompt([

    { type: "imput",
      message: "what is the name of your department?",
      Choices: ["Sales, engineering, Finance, legal"]
    },
  
{   type: "imput",
    message: "what role would you like to review?",
    choices: ["Sales_consultant, Sale_technician, Head of Finance, Finance officer, Accountant, Solicitors, Engineer"],
},


{     type: "input",
      message: "what is the name of your employee",
      choices: ["Mike Smith, Carol Smyth, Jacqie Allen, Sarah Smile, Tom Harvard, Lucy Birmingham, Rudy Mann, Natalie Spam"],
    
},

  






  ])
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