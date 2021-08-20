test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4)
})

test('object validation', () => {
   const data = {username: 'Edwin_Leon'}
    const data2 = {username: 'Edwin'}

    expect(data).toEqual({username: 'Edwin_Leon'})
    expect(data).not.toEqual(data2)
})