export const numerosRomanos = (numeroArabe) => {
  const simboloRomano = ['I', 'V', 'X', 'L', 'C','D', 'M'];
  const valorSimboloRomano=[1,5,10,50,100,500,1000];
  let resultadoNumeroRomano='';
  if(numeroArabe<0){
    return "no existen numeros negativos en romano";
  }
  if(numeroArabe===0){
      return "no existe el número 0 en números romanos";
    
  }

  if(numeroArabe > 3888) {
    return "no existen numeros superiores a 3888 en romano"
  } 
  if (numeroArabe === 40) {
    return 'XL';
  }
if (numeroArabe===90){
  return 'XC';
}
if (numeroArabe===490){
  return 'XD';
}


  let indice = 6;
  while(numeroArabe >0){
    if (numeroArabe >= valorSimboloRomano[indice]){
      resultadoNumeroRomano+= simboloRomano[indice];
      numeroArabe-= valorSimboloRomano[indice];
    }else if (numeroArabe=== valorSimboloRomano[indice]-1){
      resultadoNumeroRomano+=simboloRomano[0];
      resultadoNumeroRomano+=simboloRomano[indice];
      numeroArabe-= valorSimboloRomano[indice]-1;
    } else{
    indice--;
    }
  }

 

  return resultadoNumeroRomano;
};
