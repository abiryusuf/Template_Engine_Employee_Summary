//Using constructor function to create Employee object with name, id, email

class Employee{
    constructor(name, id, email, role){
        this.name=name;
        this.id=id;
        this.email =email;
        this.role = role;
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

    getRole(){
        return "Employee";
    }

}
module.exports = Employee;