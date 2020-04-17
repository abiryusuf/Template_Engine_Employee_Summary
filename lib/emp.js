//Using constructor function to create Employee object with name, id, email

class Employee{
    constructor(name, id, email){
        this.name=name;
        this.id=id;
        this.email =email;
    };
    //retuens name, id, email
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    }

}
module.exports = Employee;