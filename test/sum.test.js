const sum = require("../src/sum")

test("adds 1+2 to equal to 3",()=>{
    expect(sum(1,2)).toBe(3)
})

test("adds 3+5 to equal to 8", ()=>{
    expect(sum(3,5)).toBe(8)
})

test("adds 5+5 to be equal to 10",()=>{
    expect(sum(5,5)).toBe(10)
})