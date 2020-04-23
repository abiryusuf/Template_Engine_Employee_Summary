
const Employee = require("./emp");

//inheritance 
class Manager extends Employee{
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber=officeNumber;
   
    };
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
};
module.exports=Manager;