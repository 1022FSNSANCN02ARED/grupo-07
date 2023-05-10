window.addEventListener("load", function () {
  //Validación de front
  const campoNombre = document.querySelector("input.nombre");
  const campoPrecio = document.querySelector("input.precio");

  //register
  let erroresEdit = [];
  const formularioEdit = document.querySelector("form.edit");

  formularioEdit.addEventListener("submit", function (e) {
    if (campoNombre.value === "") {
      erroresEdit.push({
        campo: "nombre",
        errorMsg: "El campo de nombre debe estar completo",
      });
    } else if (campoNombre.value.length < 3) {
      erroresEdit.push({
        campo: "nombre",
        errorMsg: "El campo de nombre debe tener al menos 3 caracteres",
      });
    }

     if (campoPrecio.value <= 0) {
      erroresEdit.push({
        campo: "precio",
        errorMsg: "El campo de precio debe tener un valor valido",
      });
    }



    //Si hay errores
    if (erroresEdit.length > 0) {
      e.preventDefault();
      const errorNombre = document.querySelector(".text-danger.nombre");
      const errorPrecio = document.querySelector(".text-danger.precio");
      const ulErroresEdit = document.querySelector("div.erroresEdit ul");
      errorNombre.innerHTML = "";
      errorPrecio.innerHTML = "";
      
      for (let i = 0; i < erroresEdit.length; i++) {
        switch (erroresEdit[i]?.campo) {
          case "nombre":
            errorNombre.innerHTML += `<p>${erroresEdit[i].errorMsg}</p>`;
            break;
          case "precio":
            errorPrecio.innerHTML += `<p>${erroresEdit[i].errorMsg}</p>`;
            break;

          default:
            ulErroresEdit.innerHTML += "<li>" + erroresEdit[i] + "<li>";
            break;
        }
      }
      erroresEdit = [];
    }
  });
});
