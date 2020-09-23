const modulo1 = require('./modulo1')
const expectExport = require('expect')

describe('basic feature', ()=> {
    it('should return the right value',() => {
        expectExport(modulo1.func1(10)).toBe(11)
        // expect(modulo1.func1(10)).tobe(11)
        
    })
    
    it('func2', () =>{
        const cb = jest.fn()
        cb.mockReturnValue(2)
expectExport(modulo1.func2(10,cb )).toBe(12)  
expect (cb.mock.calls[0][0]).toBe(10)
console.log(cb.mock.calls)
  })
}) 