function add(num) {
    if(!num) return 0;
    let number;
    if(num.includes("//;")){
        number = num.replace("//;\n", '').replace(";", ',').split(",").map(i => parseInt(i));
    }else{
        number = num.replace(/(\r\n|\n|\r)/gm, ',').split(",").map(i => parseInt(i));
        if(number.some(i => i < 0)) throw new Error("negatives not allowed")
    }
    return number.reduce((prev, curr) => prev+curr,0 );
}

// describe() - to describe the function we are tests
describe("Add Numbers", () => {
    //test cases-1
    it("when no value is pass in function", () => {
        //expect() - what output is , toBe() - what output should be
        expect(add("")).toBe(0);
    });

    //case - 2
    it("return a num", () => {
        expect(add("1")).toBe(1);
    })
    
    //case - 3
    it("add two number by comma separating", () => {
        expect(add("1,2")).toBe(3);
    })

    //case - 4
    it("adding multiple numbers by comma separating", () => {
        expect(add("1,2,3,4")).toBe(10);
    })

    //case - 5
    it("except new line as valid delimiter", () => {
        expect(add("1,2\n3")).toBe(6);
    })
 
    //case - 6
    it("Negative values are not allowed", () => {
        expect(() => add("-1")).toThrow("negatives not allowed");
    })

    //case - 7
    it("Support different delimiters", () => {
        expect(add("//;\n1;2")).toBe(3)
    })
})