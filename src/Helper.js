// Calcula la diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// Calcula el total a pagar según la marca
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    case "americano":
      incremento = 1.15;
      break;
    default:
      break;
  }
  return incremento;
}

// Calcula el total a pagar según el seguro
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

// Capitalizar nombres
export function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
