
const Developer = require("../lib/dev");

describe("gitHub", ()=>{
    it("Can set GitHub account", ()=>{
        const value = "gitHubUser";
        //creating obj
        const obj = new Developer("Robert", 1, "robert@gmail.com", value);
        expect(obj).toBe(value);

    });

});

describe("getRole", ()=>{
    it("get Role should return \"Developer\"", ()=>{
        const value = "Developer";
        //creating obj
        const obj = new Developer("Robert", 1, "robert@gmail.com", value);
        expect(obj).toBe(value);

    });

});

describe("get userName", ()=>{
    it("can get GitHub username", ()=>{
        const value = "gitHubUser";
        //creating obj
        const obj = new Developer("Robert", 1, "robert@gmail.com", value);
        expect(obj.getGitHub()).toBe(value);

    });

});

