test("Testing truthiness", ()=>{

    const n = null;

    expect(n).toBeNull();
    expect(n).toBeUndefined();
    expect(n).toBeFalsy();
    expect(n).not.toBeDefined()
    expect(n).toBeTruthy();
    expect(n).toBeDefined();
})