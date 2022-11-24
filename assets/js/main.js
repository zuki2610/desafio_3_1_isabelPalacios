const calcular = () => {
  const cantidad = document.querySelector("#cantidad").value;
  const color = document.querySelector("#color").value;
  const color_color = document.querySelector(".color_color").value;
  const precio = document.querySelector("#precio").innerHTML;
  console.log("calculo");

  if (cantidad != "" && color != "") {
    console.info("cantidad", cantidad);
    console.info("color", color);
    console.info("precio", precio);

    document.querySelector("#resumen_total").innerHTML = cantidad * precio;
    document.querySelector("#resumen_cantidad").innerHTML = cantidad;
    document.querySelector("#resumen_color").style.backgroundColor = color;
    document.querySelector(".color_color").style.color = color;
  } else {
    alert("La cantidad y el color son obligatorios");
  }
};
document.querySelector("#calcular").addEventListener("click", calcular);
