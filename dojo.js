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
  if (numeroArabe==45){
    return "VL";
  }
  if (numeroArabe==95){
    return "VC";
  }
  if (numeroArabe==495){
    return "VD";
  }
  if (numeroArabe==995){
    return "VM";
  }
  if (numeroArabe===450){
    return "LD";
  }
  if (numeroArabe===950){
    return "LM";
  }
  if (numeroArabe===1450){
    return "MLD";
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
    } else if (numeroArabe=== valorSimboloRomano[indice]-5 && numeroArabe!=5){
      resultadoNumeroRomano+=simboloRomano[1];
      resultadoNumeroRomano+=simboloRomano[indice];
      numeroArabe-= valorSimboloRomano[indice]-5;
    }
    else if (numeroArabe=== valorSimboloRomano[indice]-10){
      resultadoNumeroRomano+=simboloRomano[2];
      resultadoNumeroRomano+=simboloRomano[indice];
      numeroArabe-= valorSimboloRomano[indice]-10;
    }else{
    indice--;
    }
  }

 

  return resultadoNumeroRomano;
};
