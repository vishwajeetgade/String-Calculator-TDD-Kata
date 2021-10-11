function getInt(num) {
    if (num.includes(",")) {
        let sum = num.split(",").map(i => parseInt(i)).reduce((prev, curr) => prev + curr, 0);
        return sum;
    } else {
        return parseInt(num);
    }
}

function add(num) {
    if (!num) return 0;
    else if (num.includes(",")) {
        return getInt(num);
    } else {
        return getInt(num);
    }
}

// describe() - to describe the function we are tests
describe("Add Numbers", () => {
    //test cases
    it("when no value is pass in function", () => {
        //expect() - what output is , toBe() - what output should be
        expect(add("")).toBe(0);
    });

    it("return a num", () => {
        expect(add("1")).toBe(1);
    })

    it("add two number by comma separating", () => {
        expect(add("1,2")).toBe(3);
    })
    it("adding multiple numbers by comma separating", () => {
        expect(add("1,2,3,4")).toBe(10);
    })
})