
//Dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const util =require("util");
//jest runs tests, but npm packages includes jests
//const jest = require("jest");
const generatingHTML = require("./generatingHTML");
//wirteFile will create html page
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
            type:"input",
            name: "managerName",
            message: "Enter Name of the Manager: "
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter ID of manager: "
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter Email of manager: "

        },
        {
            type: "input",
            name: "managerOffice",
            message: "Enter Office number of manager: "
        },

        {
            type: "input",
            name: "developerName1",
            message: "Enter name of Dev1: "
        },

        {
            type: "input",
            name: "developerID1",
            message: "Enter ID of Dev1: "
        },
        
        {
            type: "input",
            name: "developerEmail1",
            message: "Enter Email of Dev1: "
        },
        {
            type: "input",
            name: "developerGitHub1",
            message: "Enter GitHub of Dev1: "
        },

        {
            type: "input",
            name: "developerName2",
            message: "Enter name of Dev_2: "
        },

        {
            type: "input",
            name: "developerID2",
            message: "Enter ID of Dev_2: "
        },
        
        {
            type: "input",
            name: "developerEmail_2",
            message: "Enter Email of Dev_2: "
        },
        {
            type: "input",
            name: "developerGitHub_2",
            message: "Enter GitHub of Dev_2: "
        },
        {
            type: "input",
            name: "developerName3",
            message: "Enter name of Dev_3: "
        },

        {
            type: "input",
            name: "developerID_3",
            message: "Enter ID of Dev_3: "
        },
        
        {
            type: "input",
            name: "developerEmail_3",
            message: "Enter Email of Dev_3: "
        },
        {
            type: "input",
            name: "developerGitHub_3",
            message: "Enter GitHub of Dev_3: "
        },

        {
            type: "input",
            name: "developerName4",
            message: "Enter name of Dev_4: "
        },

        {
            type: "input",
            name: "developerID_4",
            message: "Enter ID of Dev_4: "
        },
        
        {
            type: "input",
            name: "developerEmail_4",
            message: "Enter Email of Dev_4: "
        },
        {
            type: "input",
            name: "developerGitHub_4",
            message: "Enter GitHub of Dev_4: "
        },
        {
            type: "input",
            name: "internName",
            message: "Enter name of Intern: "
        },

        {
            type: "input",
            name: "internID",
            message: "Enter ID of Intern: "
        },
        
        {
            type: "input",
            name: "emailIntern",
            message: "Enter Email of Intern: "
        },
        {
            type: "input",
            name: "InternGitHub",
            message: "Enter GitHub of GitHub: "
        },
    ]);
}
    //create  asyc function

    async function init(){
        console.log("abir")
        //Using try catch block throw the exception 
        try{
            const answers = await promptUser();
            const html = generatingHTML(answers);

            //wirteFile will create html page with the answers
            await writeFileAsync("index.html", html);

            console.log("Successfully write to index.html");
           
        }
        catch(err){
            console.log(err);
        }
    }
    init();
