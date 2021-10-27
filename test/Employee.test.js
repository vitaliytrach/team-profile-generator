const { expect, describe } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Return an object when created with new keyword", () => {
            const employee = new Employee("tempName", "tempID", "tempEmail");
            expect(typeof(employee)).toBe("object");
        });
        
        it("Return the correct name when passing a name arguement to the constructor", () => {
            const name = "Vitaliy";
            const employee = new Employee(name, "tempID", "tempEmail");
            expect(employee.name).toBe(name);
        });
        
        it("Return the correct id when passing an id arguement to the constructor", () => {
            const id = 123;
            const employee = new Employee("tempName", id, "tempEmail");
            expect(employee.id).toBe(id);
        });
        
        it("Return the correct email when passing an email arguement to the constructor", () => {
            const email = "vitaliytrach@gmail.com";
            const employee = new Employee("tempName", "tempID", email);
            expect(employee.email).toBe(email);
        });    
    });

    describe("Testing getter methods", () => {
        it("Return the correct name after creating an employee obj", () => {
            const name = "Vitaliy";
            const employee = new Employee("Vitaliy", "testID", "testEmail");
            expect(employee.getName()).toBe(name);
        });
        
        it("Return the correct id after creating an employee obj", () => {
            const id = 1;
            const employee = new Employee("testName", id, "testEmail");
            expect(employee.getID()).toBe(id);
        });
        
        it("Return the correct email after creating an employee obj", () => {
            const email = "vitaliytrach@gmail.com";
            const employee = new Employee("testName", "testID", email);
            expect(employee.getEmail()).toBe(email);
        });
        
        it("Return the correct role after creating an employee obj", () => {
            const employee = new Employee("testName", "testID", "testEmail");
            expect(employee.getRole()).toBe("Employee");
        });
    });
});
