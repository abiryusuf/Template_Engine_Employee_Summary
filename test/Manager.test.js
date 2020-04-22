const Manager = require("../lib/manager");
//const Employee = require("../lib/Employee");

it("Can set office number via constructor argument", () => {
  const value = 100;
  const obj = new Manager("Ron", 1, "test@gmail.com", value);
  expect(obj.officeNumber).toBe(value);
});

it("getRole() should return \"Manager\"", () => {
  const value = "Manager";
  const obj = new Manager("Ron", 1, "test@.gmailcom", 100);
  expect(obj.getRole()).toBe(value);
});

it("Can get office number via getOffice()", () => {
  const value = 100;
  const obj = new Manager("ron", 1, "test@gmail.com", value);
  expect(obj.getOfficeNumber()).toBe(value);
});