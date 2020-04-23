
const Employee = require("./emp");
class Intern extends Employee{
    constructor(name, id, email, school){
        //super gets the employee properties
        super(name, id, email);
        this.school = school;
    };

    getSchool(){
        return this.school;
    };

    getRole(){
        return "Intern";
    };
};

module.exports = Intern;