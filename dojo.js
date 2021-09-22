export const numerosRomanos = (numeroArabe) => {
  if(numeroArabe<0){
    return "no existen numeros negativos en romano";
  }

  if (numeroArabe === 1) {
    return 'I';
  }

  if (numeroArabe === 2) {
    return 'II';
  }

  if (numeroArabe === 5) {
    return 'V';
  }

  return "no existe el número 0 en números romanos";
};
