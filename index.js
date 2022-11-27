/* Calculadora de intereses de financiera */

let calculoInteres = function () {
  let interesAPagar;
  let cuotasUna = 15;
  let cuotasTres = 30;
  let cuotasSeis = 45;
  let cuotasNueve = 60;
  let cuotasDoce = 100;
  let montoSolicitado = prompt("Ingrese el monto que desea que le prestemos: ");
  let cuotasSolicitadas = prompt(
    "Ingrese el numero de cuotas en el que desea devolverlo"
  );

  switch (cuotasSolicitadas) {
    case "1":
      return (montoSolicitado * cuotasUna) / 100;
      break;
    case "3":
      return (montoSolicitado * cuotasTres) / 100;

      break;
    case "6":
      return (montoSolicitado * cuotasSeis) / 100;
      break;
    case "9":
      return (montoSolicitado * cuotasNueve) / 100;
      break;
    case "12":
      return (montoSolicitado * cuotasDoce) / 100;
      break;
    default:
      return "Ingrese numero de cuotas validas";
      break;
  }
};
let interesAPagar = calculoInteres();
alert("Su interes es de: " + interesAPagar);
