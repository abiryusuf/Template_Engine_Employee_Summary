
const Employee = require("./emp");

//extends
class Developer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    };

    getGitHub(){
        return this.github;
    };
    getRole(){
        return "Developer";
    }
}

module.exports = Developer;