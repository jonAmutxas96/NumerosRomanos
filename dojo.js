export const numerosRomanos = (numeroArabe) => {
  if(numeroArabe<0){
    return "no existen numeros negativos en romano";
  }

  if(numeroArabe > 3888) {
    return "no existen numeros superiores a 3888 en romano"
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

  if (numeroArabe === 10) {
    return 'X';
  }
  if (numeroArabe === 30) {
    return 'XXX';
  }

  if (numeroArabe === 50) {
    return 'L';
  }

  if (numeroArabe === 100) {
    return 'C';
  }

  if (numeroArabe === 500) {
    return 'D';
  }

  if (numeroArabe === 1000) {
    return 'M';
  }

  if (numeroArabe === 3) {
    return 'III'
  }

  if (numeroArabe === 4) {
    return 'IV'
  }

  return "no existe el número 0 en números romanos";
};
