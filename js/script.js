"use strict";

document.querySelector("#submit").addEventListener("click", function () {
  const numA = Number(document.querySelector("#num-a").value);
  const numB = Number(document.querySelector("#num-b").value);

  if (numA === 0 || numB === 0) {
    alert("⛔ Prencha todos os números");
  } else if (numA === numB) {
    alert("⛔ Preencha números diferentes!");
  } else if (numA < numB) {
    alert("✅ Fomulário Válido!");
  } else {
    alert("⛔ Fomulário inválido, digite outros números!");
  }
});
