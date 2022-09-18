const generateManager = function (manager) {
    return `

    <div class="card border border-5 gx-3" style="width: 18rem;">
    <div class="card-body text-center">
    <div class="title-box bg-primary text-white">
    <h3 class="card-title">${manager.name}</h3>
          <h4 class="card-subtitle mb-2">Manager
          <i class="fa-solid fa-user"></i>
          </h4>
      </div>
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office">Office Number: ${manager.officeNumber}</p>
        <br>
    </div>
  </div>

`;
}


// create Engineer card
const generateEngineer = function (engineer) {
    return `    
    
    <div class="card border border-5 gx-3" style="width: 18rem;">
    <div class="card-body text-center">
    <div class="title-box bg-primary text-white">
    <h3 class="card-title">${engineer.name}</h3>
    <h4 class="card-subtitle mb-2">Engineer
    <i class="fa-solid fa-person"></i>
    </h4>
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github username: ${engineer.github}</p>
        <br>
    </div>
  </div>

`;
    }


const generateIntern = function (intern) {
        return `

        `
    };


// push array of added team members to page 
generateMarkup = (data) => {

    // create an array of the team members 
    teamGenerate = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call generateManager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamGenerate.push(managerCard);
        }

        // call generateEngineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamGenerate.push(engineerCard);
        }

        // call generateIntern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamGenerate.push(internCard);
        }
        
    }

    //join the teamGenerate team members
    const employeeCards = teamGenerate.join('')

    // create the html page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="../dist/style.css">
      <script src="https://kit.fontawesome.com/da4376b503.js" crossorigin="anonymous"></script><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </head>
  <body>
  <header> 
        <div class = "profile-header text-center fw-bold" > 
          <h1> My Team </h1> 
        </div>
      </header>
  <div class="container-lg"  id="team-cards">
                  <!--Employee Cards-->
                  ${employeeCards}
            
          </div>
  </main>
      
  </body>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
  </html>
  


  `;}

  // export to index
module.exports = generateMarkup; 