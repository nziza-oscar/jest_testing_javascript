test("adding positive number not to be 0",()=>{
    for(let i=1; i<=5; i++){
      expect(1+i).not.toBe(0)   
    }
})