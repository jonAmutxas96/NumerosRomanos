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
});
