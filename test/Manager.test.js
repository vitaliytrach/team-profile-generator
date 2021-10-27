const { expect, describe, it } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("Return an object when created with the new keyword", () => {
            const manager = new Manager("testName", "testId", "testEmail", "testOfficeNum");
            expect(typeof(manager)).toBe("object");
        });

        it("Return the correct name when passing a name argument to the constructor", () => {
            const name = "Vitaliy";
            const manager = new Manager(name, "testId", "testEmail", "testOfficeNum");
            expect(manager.name).toBe(name);
        });

        it("Return the correct id when passing an id argument to the constructor", () => {
            const id = 123;
            const manager = new Manager("testName", id, "testEmail", "testOfficeNum");
            expect(manager.id).toBe(id);
        });

        it("Return the correct email when passing an email argument to the constructor", () => {
            const email = "vitaliytrach@gmail.com";
            const manager = new Manager("testName", "testID", email, "testOfficeNum");
            expect(manager.email).toBe(email);
        });

        it("Return the correct office number when passing an office number argument to the constructor", () => {
            const officeNumber = 104;
            const manager = new Manager("testName", "testID", "testEmail", officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });

    describe("Testing getter methods", () => {
        it("Return the correct name after creating a manager obj", () => {
            const name = "Vitaliy";
            const manager = new Manager("Vitaliy", "testID", "testEmail", "testOffNum");
            expect(manager.getName()).toBe(name);
        });
        
        it("Return the correct id after creating a manager obj", () => {
            const id = 1;
            const manager = new Manager("testName", id, "testEmail", "testOffNum");
            expect(manager.getID()).toBe(id);
        });
        
        it("Return the correct email after creating a manager obj", () => {
            const email = "vitaliytrach@gmail.com";
            const manager = new Manager("testName", "testID", email, "testOffNum");
            expect(manager.getEmail()).toBe(email);
        });

        it("Return the correct email after creating a manager obj", () => {
            const officeNumber = 106;
            const manager = new Manager("testName", "testID", "testEmail", officeNumber);
            expect(manager.getOfficeNumber()).toBe(officeNumber);
        });
        
        it("Return the correct role after creating a manager obj", () => {
            const manager = new Manager("testName", "testID", "testEmail");
            expect(manager.getRole()).toBe("Manager");
        });       
    });
});