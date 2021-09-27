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


  let indice = 6;
  while(numeroArabe >0){
    if (numeroArabe >= valorSimboloRomano[indice]){
      resultadoNumeroRomano+= simboloRomano[indice];
      numeroArabe-= valorSimboloRomano[indice];
    }else if (numeroArabe=== valorSimboloRomano[indice]-valorSimboloRomano[0]){
      resultadoNumeroRomano+=simboloRomano[0];
      resultadoNumeroRomano+=simboloRomano[indice];
      numeroArabe-= valorSimboloRomano[indice]-1;
    } else if (numeroArabe=== valorSimboloRomano[indice]-valorSimboloRomano[1] && numeroArabe!=valorSimboloRomano[1]){
      resultadoNumeroRomano+=simboloRomano[1];
      resultadoNumeroRomano+=simboloRomano[indice];
      numeroArabe-= valorSimboloRomano[indice]-simboloRomano[1];
    }
    else if (numeroArabe=== valorSimboloRomano[indice]-valorSimboloRomano[2]){
      resultadoNumeroRomano+=simboloRomano[2];
      resultadoNumeroRomano+=simboloRomano[indice];
      numeroArabe-= valorSimboloRomano[indice]-valorSimboloRomano[2];
    } else if (numeroArabe=== valorSimboloRomano[indice]-valorSimboloRomano[3] && numeroArabe!=valorSimboloRomano[3]){
      resultadoNumeroRomano+=simboloRomano[3];
      resultadoNumeroRomano+=simboloRomano[indice];
      numeroArabe-= valorSimboloRomano[indice]-valorSimboloRomano[3];
    }else{
    indice--;
    }
  }

 

  return resultadoNumeroRomano;
};
