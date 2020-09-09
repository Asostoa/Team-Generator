const generateHTML = function (teamstr) {

    console.log("Inside gen html");
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Team Profile Generator</title>
   <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">
   <style>
       body {
           background: url(https://images.unsplash.com/photo-1484820986637-7ec3e85b394f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1960&q=80) center;
           background-repeat: no-repeat;
           margin: 0%;
           height: 100vh;
       }

       .header {
           background-color: rgb(31, 223, 248);
           border: solid black;
           text-align: center;
           font-size: 30px;
           font-family: 'Monoton', cursive;
           opacity: 0.8 
       }

       .container-body {
           display: flex;
           justify-content: space-evenly;
       }

       .card {
           background-color:rgb(255, 255, 255);
           margin-top: 4%;
           border: solid black;
           font-size: x-large;
       }
       .card-header{
           margin: 4%;
       }
       .card-body{
           margin: 4%;
       }
       
       .center { 
        text-align: center; 
        width: 100%; 
        }
   </style>
   
</head>
    
    <body>
   <div class=header>
       <h1>My Team</h1>
   </div>
   <div class="container-body">

         ${teamstr} 

         </div>
    <script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
    </body>
    
    </html>`
    
}


const generateCard = function (employee) {
   
    let roleInfo;

    if (employee.title === "Manager") {
        roleInfo = `Office Number: ${employee.officeNumber}`
    } else if (employee.title === "Engineer") {
        roleInfo = `Github Username: ${employee.github}`
    } else if (employee.title === "Intern") {
        roleInfo = `School: ${employee.school}`
    }

    let roleIcon;

    if (employee.title === "Manager") {
        roleIcon = `<i class="fas fa-glasses center"></i>`
    } else if (employee.title === "Engineer") {
        roleIcon = `<i class="fas fa-mug-hot center"></i>`
    } else if (employee.title === "Intern") {
        roleIcon = `<i class="fas fa-user-graduate center"></i>`
    }

    

    return `<div class="card">
    <div class="card-header">
    <h2 class="center">${roleIcon}${employee.name}</h2>  
    <h2 class="center">${employee.title}</h2>
   <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: ${employee.id}</li>
        <li>Email: ${employee.email}</li>
        <li>${roleInfo}</li>
        </ul>

    
</div>
</div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;