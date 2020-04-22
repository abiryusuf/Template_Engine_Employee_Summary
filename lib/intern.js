
const Employee = require("./emp");
class Intern extends Employee(){
    constructor(name, id, email, college){
        //super gets the employee properties
        super(name, id, email);
        this.college = college;
    };

    getCollege(){
        return this.college;
    };

    getRole(){
        return "Intern";
    };
};

module.exports = Intern;