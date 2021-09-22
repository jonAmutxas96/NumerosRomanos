import { numerosRomanos } from './dojo';

// Kata número romanos: Convertir números árabes desde 1 hasta 3000 a romanos

describe('conversor numero arabes a romanos', () => {
  it('Cuando recibe el numero 0 devuelve ""', () => {
    expect(numerosRomanos(0)).toBe("");
  });
  it ('cuando recibe numeros negativos devuelve "no existen numeros negativos en romano"',()=>{
    expect(numerosRomanos(-1)).toBe("no existen numeros negativos en romano");
  })
});
