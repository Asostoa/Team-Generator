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
           margin: 10%;
       }
       .card-body{
           margin: 10%;
       }
       
       .fas fa-glasses mr-2{
        position:absolute;
        top:45%;
        left:45%;
        color: white;
        }
        .fas fa-mug-hot mr-2{
            position:absolute;
            top:45%;
            left:45%;
            color: white;
        }
        .fas fa-user-graduate mr-2{
            position:absolute;
            top:45%;
            left:45%;
            color: white;
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
    //if else statement
    let roleInfo;

    if (employee.title === "Manager") {
        roleInfo = `Office Number: ${employee.officeNumber} 
        <div>
        <i class="fas fa-glasses mr-2" style="align-items: center"></i>
        </div>`
    } else if (employee.title === "Engineer") {
        roleInfo = `Github Username: ${employee.github}
        <div>
        <i class="fas fa-mug-hot mr-2" style="align-items: center"></i>
        </div>`

    } else if (employee.title === "Intern") {
        roleInfo = `School: ${employee.school} 
        <div>
        <i class="fas fa-user-graduate mr-2" style="align-items: center"></i>
        </div>`
    }

    return `<div class="card">
    <div class="card-header">
    <h2>${employee.name}</h2>  
    <h2>${employee.title}</h2>
    <hr>
</div>
<div class="card-body">
    <ul>
        <li>ID: ${employee.id}</li>
        <li>Email: ${employee.email}</li>
    </ul>
    
    <p>${roleInfo}</p>
</div>
</div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;