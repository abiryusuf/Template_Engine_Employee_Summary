const Employee = require("../lib/emp");

// describe("Employee", ()=>{
// it("Can instantiate Employee instance", () =>{
//     //create an object
//   const obj = new Employee();
//   expect(typeof(obj)).toBe("object");
// });

// it("Can set name via constructor arguments", () => {
//   const name = "Ron";
//   const obj = new Employee(name);
//   expect(obj.name).toBe(name);
// });

// it("Can set id via constructor argument", () => {
//   const value = 100;
//   const obj = new Employee("manager", value);
//   expect(obj.id).toBe(value);
// });

// it("Can set email via constructor argument", () => {
//   const value = "test@gmail.com";
//   const obj = new Employee("Ron", 1, value);
//   expect(obj.email).toBe(value);
// });
// describe("getName",()=>{
// it("Can get name via getName()", () => {
//   const value = "Ron";
//   const obj = new Employee(value);
//   expect(obj.getName()).toBe(value);
// });
// });
// describe("getID", ()=>{
// it("Can get id via getId()", () => {
//   const value = 100;
//   const obj = new Employee("manager", testValue);
//   expect(obj.getId()).toBe(value);
// });
// });
// describe("getEmial", ()=>{
// it("Can get email via getEmail()", () => {
//   const value = "test@gmail.com";
//   const obj = new Employee("manager", 1, value);
//   expect(obj.getEmail()).toBe(value);
// });
// });
// describe("getRole",()=>{
// it("getRole() should return \"Employee\"", () => {
//   const value = "Employee";
//   const obj = new Employee("Ron", 1, "test@gmail.com");
//   expect(obj.getRole()).toBe(value);
// });
// });
// });
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
