const fs = require('fs');
const path = require('path');


const registeredEmailsFile = path.join(__dirname,"registeredMails.json");

let registeredEmails;

fs.readFile(registeredEmailsFile, "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    registeredEmails = JSON.parse(data);

    const checkEmail = (inputEmail) => {
        return registeredEmails.includes(inputEmail);
    };
    
    console.log(checkEmail("chirantan.das.20@aot.edu.in"));
});
