function getInt(num) {
    if(num.includes(",")) {
        let numInt = num.split(",").map(Number);
        return numInt;
    }else{
        return parseInt(num);
    }
}

function add(num) {
    if(!num) return 0;
    else if(num.includes(",")){
        const val = getInt(num);
        return val[0] + val[1];
    }else{
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
})