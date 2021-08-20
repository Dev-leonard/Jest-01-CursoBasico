const sum = require('../src/sum')

describe('pruebas para suma', () => {
    test('1 + 2 is 3', () => {
        expect(sum(1,2)).toBe(3)
        
    })
    //it('should return 3 whith 1+2', () => {  // es lo mismo que el anterior ,it es alias de  test
      //  expect(sum(1,2)).toBe(3)
    //})

    test('1 + (-2) is (-1)', () => {
        expect(sum(1,-2)).toBe(-1)
    })

    test('-1 + (-2) is (-3)', () => {
            expect(sum(-1,-2)).toBe(-3)
    })

})

