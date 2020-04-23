const Intern = require("../lib/intern");

// it("Can set college via constructor", () => {
//   const value = "Monroe";
//   const obj = new Intern("abir", 1, "test@gamil.com", value);
//   expect(obj.college).toBe(value);
// });

// it("getRole() should return \"Intern\"", () => {
//   const value = "Intern";
//   const obj = new Intern("abir", 1, "test@gamil.com", "Monroe");
//   expect(obj.getRole()).toBe(value);
// });

// it("Can get college via getCollege()", () => {
//   const value = "Monroe";
//   const obj = new Intern("abir", 1, "test@gmail.com", value);
//   expect(obj.getCollege()).toBe(value);
// });

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});