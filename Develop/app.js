const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const html = require("./templates/main");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamstr = ``;

async function prompt() {
     let responseDone = "";
    
     do {
          try {
               response = await inquirer.prompt([

                    {
                         type: "input",
                         name: "name",
                         message: "What is the employee's name?: "
                    },
                    {
                         type: "input",
                         name: "id",
                         message: "Enter the employee's ID: "
                    },
                    {
                         type: "input",
                         name: "email",
                         message: "Enter the employee's email address: "
                    },
                    {
                         type: "list",
                         name: "role",
                         message: "What what is the employee's role:",
                         choices: [
                              "Engineer",
                              "Intern",
                              "Manager"
                         ]
                    }
               ]);

               let response2 = ""
              

               if (response.role === "Engineer") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "github",
                         message: "What is the employee's github username?:",
                    }, ]);
                    
                    const engineer = new Engineer(response.name, response.id, response.email, response2.github);
                    teamArray.push(engineer);
               } else if (response.role === "Intern") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "school",
                         message: "What school is the employee attending?:",
                    }, ]);
                    
                    const intern = new Intern(response.name, response.id, response.email, response2.school);
                    teamArray.push(intern);
               } else if (response.role === "Manager") {
                    response2 = await inquirer.prompt([{
                         type: "input",
                         name: "officeNumber",
                         message: "What is the employee's office number?:",
                    }, ]);
                    
                    const manager = new Manager(response.name, response.id, response.email, response2.officeNumber);
                    teamArray.push(manager);
               }
          } catch (err) {
               return console.log(err);
          }
          console.log(teamArray)
          
          responseDone = await inquirer.prompt([{
               type: "list",
               name: "finish",
               message: "Do you want to add another?: ",
               choices: [
                    "Yes",
                    "No"
               ]
          }, ]);

          
     } while (responseDone.finish === "Yes");
}


async function main() {
     try {
          await prompt()
          

          for (let i = 0; i < teamArray.length; i++) {
              
               teamstr = teamstr + html.generateCard(teamArray[i]);
          }

          let finalHTML = html.generateHTML(teamstr)

          console.log(teamstr)

          writeFileAsync("./output/index.html", finalHTML)


     } catch (err) {
          return console.log(err);
     }

};





main();

