const Manager = require("../lib/manager");
//const Employee = require("../lib/Employee");

// it("Can set office number via constructor argument", () => {
//   const value = 100;
//   const obj = new Manager("Ron", 1, "test@gmail.com", value);
//   expect(obj.officeNumber).toBe(value);
// });

// it("getRole() should return \"manager\"", () => {
//   const value = "manager";
//   const obj = new Manager("Ron", 1, "test@.gmailcom", 100);
//   expect(obj.getRole()).toBe(value);
// });

// it("Can get office number via getOffice()", () => {
//   const value = 100;
//   const obj = new Manager("ron", 1, "test@gmail.com", value);
//   expect(obj.getOfficeNumber()).toBe(value);
// });

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
