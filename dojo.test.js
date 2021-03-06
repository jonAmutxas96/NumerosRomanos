import { numerosRomanos } from './dojo';

// Kata número romanos: Convertir números árabes desde 1 hasta 3888 a romanos

describe('conversor numero arabes a romanos', () => {
  it('si el número es 0, informa de que no existe', () => {
    expect(numerosRomanos(0)).toBe("no existe el número 0 en números romanos");
  });

  it ('si el número es negativo informa al usuario',()=>{
    expect(numerosRomanos(-1)).toBe("no existen numeros negativos en romano");
  })

  it('si el número es superior a 3888 informa al usuario', () => {
    expect(numerosRomanos(3889)).toBe("no existen numeros superiores a 3888 en romano");
  })

  it.each([
    [1, 'I'],
    [5, 'V'], 
    [10, 'X'],
    [50, 'L'], 
    [100, 'C'], 
    [500, 'D'], 
    [1000, 'M'],
    [2, 'II'], 
    [3, 'III'],
    [4, 'IV'],
    [30,'XXX'],
    [40, "XL"],
    [9,"IX"],
    [49,'IL'],
    [99,"IC"],
    [90, "XC"],
    [490, "XD"],
    [990, "XM"],
    [45,"VL"],
    [95,"VC"],
    [495,"VD"],
    [995,"VM"],
    [450,"LD"],
    [950,"LM"],
    [1450,"MLD"],
    [14,"XIV"]
  ])('si el número es %i devuelve %s', (arabe, romano) => {
    expect(numerosRomanos(arabe)).toBe(romano);
  })
});
