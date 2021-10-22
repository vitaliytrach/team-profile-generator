const fs = require("fs");
let htmlPage = "";

const generateTopOfHTML = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <div style="margin: 0%; padding: 0%;">
                <div class="jumbotron bg-danger text-white w-100 p-3 text-center">
                  <h1>My Team</h1>
              </div>        
        </header>
        
        <main class="d-flex justify-content-center flex-wrap">    
    `;
}

const generateBottomOfHTML = () => {
    return `
    </main>
    </body>
    </html>
    `
    ;
}

const addManager = (name, id, email, officeNumber) => { 
    return `
    <div class="card m-2 shadow" style="width: 20rem;">
    <div class="card-body bg-primary text-white">
        <h5 class="card-title">${name}</h5>
        <h5>
            Manager
        </h5>
    </div>
    <ul class="list-group list-group-flush bg-light px-3 py-3">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">Office Number: ${officeNumber}</li>
    </ul>
    </div>   
    `;
}

const addEngineer = (name, id, email, github) => {
    return `
    <div class="card m-2 shadow" style="width: 20rem;">
    <div class="card-body bg-primary text-white">
        <h5 class="card-title">${name}</h5>
        <h5>
            Engineer
        </h5>
    </div>
    <ul class="list-group list-group-flush bg-light px-3 py-3">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">Github: <a href="github.com/${github}">${github}</a></li>
    </ul>
    </div>   
    `;
}

const addIntern = (name, id, email, school) => {
    return `
    <div class="card m-2 shadow" style="width: 20rem;">
    <div class="card-body bg-primary text-white">
        <h5 class="card-title">${name}</h5>
        <h5>
            Intern
        </h5>
    </div>
    <ul class="list-group list-group-flush bg-light px-3 py-3">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
    </ul>
    </div>    
    `;
}

const appendPage = (text) => {
    htmlPage += text;
}

const generatePage = () => {
    fs.appendFile("./dist/index.html", htmlPage, (err) => {
        console.log(err);
    }); 
}

module.exports = {
    generateTopOfHTML,
    generateBottomOfHTML,
    addManager,
    addEngineer,
    addIntern,
    appendPage,
    generatePage
}