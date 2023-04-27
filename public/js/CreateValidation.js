window.addEventListener("load", function () {
  //Validación de front
  const campoNombre = document.querySelector("input.nombre");
  const campoDescripcion = document.querySelector("input.desc");
  const campoGama = document.querySelector("input.gama");
  const campoRam = document.querySelector("input.ram");
  const campoSlots = document.querySelector("input.slots");
  const campoSockets = document.querySelector("input.sockets");
  const campoPrecio = document.querySelector("input.precio");

  //Create
  let erroresCreate = [];
  const formularioCreate = document.querySelector("form.create");
  formularioCreate.addEventListener("submit", function (e) {
    e.preventDefault();
    if (campoNombre.value === "") {
      erroresCreate.push({
        campo: "nombre",
        errorMsg: "El campo de nombre debe estar completo",
      });
    } else if (campoNombre.value.length < 3) {
      erroresCreate.push({
        campo: "nombre",
        errorMsg: "El campo de nombre debe tener al menos 3 caracteres",
      });
    }

    if (campoRam.value === "") {
      erroresCreate.push({
        campo: "ram",
        errorMsg: "El campo de ram debe estar completo",
      });
    } else {
      let slots = campo.value % 2;
      if (campoSlots.value == "") {
        erroresCreate.push({
          campo: "slots",
          errorMsg: "El campo de slots debe estar completo",
        });
      } else if (slots != 0) {
        erroresCreate.push({
          campo: "slots",
          errorMsg: "El campo de slots debe tener un valor valido",
        });
      }
    }

    if (campoPrecio.value === "") {
      erroresCreate.push({
        campo: "precio",
        errorMsg: "El campo de precio debe estar completo",
      });
    }

    //Si hay errores
    if (erroresCreate.length > 0) {
      e.preventDefault();
      const errorNombre = document.querySelector(".text-danger.nombre");
      const errorPrecio = document.querySelector(".text-danger.precio");
      const errorRam = document.querySelector(".text-danger.ram");
      const errorSlots = document.querySelector(".text-danger.slots");
      const ulErroresCreate = document.querySelector("div.erroresCreate ul");
      errorNombre.innerHTML = "";
      errorRam.innerHTML = "";
      errorSlots.innerHTML = "";
      errorPrecio.innerHTML = "";

      for (let i = 0; i < erroresCreate.length; i++) {
        switch (erroresCreate[i]?.campo) {
          case "nombre": 
      console.log("nombre")
      console.log(erroresCreate[i])

            errorNombre.innerHTML += `<p>${erroresCreate[i].errorMsg}</p>`;
            break;
          case "ram":
      console.log("ram")
      console.log(erroresCreate[i])

            errorNombre.innerHTML += `<p>${erroresCreate[i].errorMsg}</p>`;
            break;
          case "slots":
      console.log("slots")
      console.log(erroresCreate[i])

            errorNombre.innerHTML += `<p>${erroresCreate[i].errorMsg}</p>`;
            break;
          case "precio":
      console.log("precio")
      console.log(erroresCreate[i])

            errorNombre.innerHTML += `<p>${erroresCreate[i].errorMsg}</p>`;
            break;
          default:
            ulErroresCreate.innerHTML += "<li>" + erroresCreate[i].errorMsg + "<li>";
      console.log("default")
      console.log(erroresCreate[i])

            break;
        }
      }
      console.log()
      erroresCreate = [];
    }
  });
});
