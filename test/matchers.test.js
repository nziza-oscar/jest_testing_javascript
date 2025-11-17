test("Adding positive numbers is not zero",()=>{
    for(let i=1;i<=5;i++){
        for(let j=1;j<=i;i++){
            expect(i+j).not.toBe(0)
        }
    }
})