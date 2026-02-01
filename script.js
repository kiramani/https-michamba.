document.getElementById("formEmpleo").addEventListener("submit", async e => {
  e.preventDefault();

  const datos = {
    estudios: estudios.value,
    colonia: colonia.value,
    sueldo: sueldo.value
  };

  document.getElementById("resultados").innerText =
    "Buscando empleos cerca de ti...";
});
