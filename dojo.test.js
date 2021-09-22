import { numerosRomanos } from './dojo';

// Kata número romanos: Convertir números árabes desde 1 hasta 3000 a romanos

describe('conversor numero arabes a romanos', () => {
  it('si el número es 0, informa de que no existe', () => {
    expect(numerosRomanos(0)).toBe("no existe el número 0 en números romanos");
  });

  it ('si el número es negativo informa al usuario',()=>{
    expect(numerosRomanos(-1)).toBe("no existen numeros negativos en romano");
  })

  it ('si el número es 1 se devuleve "I"',()=>{
    expect(numerosRomanos(1)).toBe("I");
  })

  it ('si el número es 2 se devuleve "II"',()=>{
    expect(numerosRomanos(2)).toBe("II");
  })

  it ('si el número es 5 se devuleve "V"',()=>{
    expect(numerosRomanos(5)).toBe("V");
  })

  it ('si el número es 10 se devuleve "X"',()=>{
    expect(numerosRomanos(10)).toBe("X");
  })

  it ('si el número es 50 se devuleve "L"',()=>{
    expect(numerosRomanos(50)).toBe("L");
  })

  it ('si el número es 100 se devuleve "C"',()=>{
    expect(numerosRomanos(100)).toBe("C");
  })

  it ('si el número es 500 se devuleve "D"',()=>{
    expect(numerosRomanos(500)).toBe("D");
  })
});
