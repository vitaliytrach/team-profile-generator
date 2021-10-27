const { expect, describe, it } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Return an object when created with the new keyword", () => {
            const engineer = new Engineer("testName", "testId", "testEmail", "testGithub");
            expect(typeof(engineer)).toBe("object");
        });

        it("Return the correct name when passing a name argument to the constructor", () => {
            const name = "Vitaliy";
            const engineer = new Engineer(name, "testId", "testEmail", "testGithub");
            expect(engineer.name).toBe(name);
        });

        it("Return the correct id when passing an id argument to the constructor", () => {
            const id = 123;
            const engineer = new Engineer("testName", id, "testEmail", "testGithub");
            expect(engineer.id).toBe(id);
        });

        it("Return the correct email when passing an email argument to the constructor", () => {
            const email = "vitaliytrach@gmail.com";
            const engineer = new Engineer("testName", "testID", email, "testGithub");
            expect(engineer.email).toBe(email);
        });

        it("Return the correct office number when passing an office number argument to the constructor", () => {
            const github = "vitaliytrach";
            const engineer = new Engineer("testName", "testID", "testEmail", github);
            expect(engineer.github).toBe(github);
        });
    });

    describe("Testing getter methods", () => {
        it("Return the correct name after creating an engineer obj", () => {
            const name = "Vitaliy";
            const engineer = new Engineer("Vitaliy", "testID", "testEmail", "testGithub");
            expect(engineer.getName()).toBe(name);
        });
        
        it("Return the correct id after creating an engineer obj", () => {
            const id = 1;
            const engineer = new Engineer("testName", id, "testEmail", "testGithub");
            expect(engineer.getID()).toBe(id);
        });
        
        it("Return the correct email after creating an engineer obj", () => {
            const email = "vitaliytrach@gmail.com";
            const engineer = new Engineer("testName", "testID", email, "testGithub");
            expect(engineer.getEmail()).toBe(email);
        });

        it("Return the correct email after creating an engineer obj", () => {
            const github = "vitaliytrach";
            const engineer = new Engineer("testName", "testID", "testEmail", github);
            expect(engineer.getGithub()).toBe(github);
        });
        
        it("Return the correct role after creating an engineer obj", () => {
            const engineer = new Engineer("testName", "testID", "testEmail", 'testGithub');
            expect(engineer.getRole()).toBe("Engineer");
        });       
    });
});