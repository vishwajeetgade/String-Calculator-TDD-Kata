function add(num) {
    if(!num) return 0;
}

// describe() - to describe the function we are tests
describe("Add Numbers", () => {
    //test cases
    it("when no value is pass in function", () => {
        //expect() - what output is , toBe() - what output should be
        expect(add("")).toBe(0);
    });
})