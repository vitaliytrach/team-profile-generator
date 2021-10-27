const { expect, describe, it } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("Return an object when created with the new keyword", () => {
            const intern = new Intern("testName", "testId", "testEmail", "testGithub");
            expect(typeof(intern)).toBe("object");
        });

        it("Return the correct name when passing a name argument to the constructor", () => {
            const name = "Vitaliy";
            const intern = new Intern(name, "testId", "testEmail", "testGithub");
            expect(intern.name).toBe(name);
        });

        it("Return the correct id when passing an id argument to the constructor", () => {
            const id = 123;
            const intern = new Intern("testName", id, "testEmail", "testGithub");
            expect(intern.id).toBe(id);
        });

        it("Return the correct email when passing an email argument to the constructor", () => {
            const email = "vitaliytrach@gmail.com";
            const intern = new Intern("testName", "testID", email, "testGithub");
            expect(intern.email).toBe(email);
        });

        it("Return the correct office number when passing an office number argument to the constructor", () => {
            const school = "WSU";
            const intern = new Intern("testName", "testID", "testEmail", school);
            expect(intern.school).toBe(school);
        });
    });

    describe("Testing getter methods", () => {
        it("Return the correct name after creating an intern obj", () => {
            const name = "Vitaliy";
            const intern = new Intern("Vitaliy", "testID", "testEmail", "testSchool");
            expect(intern.getName()).toBe(name);
        });
        
        it("Return the correct id after creating an intern obj", () => {
            const id = 1;
            const intern = new Intern("testName", id, "testEmail", "testSchool");
            expect(intern.getID()).toBe(id);
        });
        
        it("Return the correct email after creating an intern obj", () => {
            const email = "vitaliytrach@gmail.com";
            const intern = new Intern("testName", "testID", email, "testSchool");
            expect(intern.getEmail()).toBe(email);
        });

        it("Return the correct email after creating an intern obj", () => {
            const school = "WSU";
            const intern = new Intern("testName", "testID", "testEmail", school);
            expect(intern.getSchool()).toBe(school);
        });
        
        it("Return the correct role after creating an intern obj", () => {
            const intern = new Intern("testName", "testID", "testEmail", 'testSchool');
            expect(intern.getRole()).toBe("Intern");
        });       
    });
});