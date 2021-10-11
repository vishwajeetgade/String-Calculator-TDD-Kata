function add(num) {
    if(!num) return 0;
    else{
        let numInt = num.split(",");
        return parseInt(numInt[0])+parseInt(numInt[1]);
    }
}

// describe() - to describe the function we are tests
describe("Add Numbers", () => {
    //test cases
    it("when no value is pass in function", () => {
        //expect() - what output is , toBe() - what output should be
        expect(add("")).toBe(0);
    });

    it("add two number by comma separating", () => {
        expect(add("1,2")).toBe(3);
    })
})