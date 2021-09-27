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
    }else{
      let esNumeroCompuesto= false;
      let indiceAuxiliar = 0;
      while (!esNumeroCompuesto){
        if(numeroArabe>= valorSimboloRomano[indice]- valorSimboloRomano[indiceAuxiliar]&& numeroArabe!=valorSimboloRomano[indiceAuxiliar]){
          resultadoNumeroRomano+=simboloRomano[indiceAuxiliar];
          resultadoNumeroRomano+= simboloRomano[indice];
          numeroArabe-= valorSimboloRomano[indice]- valorSimboloRomano[indiceAuxiliar];
          esNumeroCompuesto= true;
        }else{
          indiceAuxiliar++
        }
        if (indiceAuxiliar>indice-1){
          esNumeroCompuesto=true
        }
      }
    indice--;
    }
  }

 

  return resultadoNumeroRomano;
};
