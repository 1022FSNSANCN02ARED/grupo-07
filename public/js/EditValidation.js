window.addEventListener("load", function () {
  //Validación de front
  const campoNombre = document.querySelector("input.nombre");
  const campoApellido = document.querySelector("input.apellido");
  const campoEmail = document.querySelector("input.email");
  const campoTelefono = document.querySelector("input.numTel");
  const campoAvatar = document.querySelector("input.imagen");
  const campoPassword = document.querySelector("input.password");

  //register
  let erroresEdit = [];
  const formularioEdit = document.querySelector("form.Edit");

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

    if (campoApellido.value === "") {
      erroresEdit.push({
        campo: "apellido",
        errorMsg: "El campo de apellido debe estar completo",
      });
    } else if (campoApellido.value.length < 3) {
      erroresEdit.push({
        campo: "apellido",
        errorMsg: "El campo de apellido debe tener al menos 3 caracteres",
      });
    }

    if (campoEmail.value === "") {
      erroresEdit.push({
        campo: "email",
        errorMsg: "El campo de correo electrónico debe estar completo",
      });
    } else if (!campoEmail.value.includes("@")) {
      erroresEdit.push({
        campo: "email",
        errorMsg: "El campo de correo electrónico debe contener un '@'",
      });
    }

    if (campoTelefono.value === "") {
      erroresEdit.push({
        campo: "numTel",
        errorMsg: "El campo de teléfono debe estar completo",
      });
    } else if (campoTelefono.value == "") {
      erroresEdit.push({
        campo: "numTel",
        errorMsg:
          "El campo de teléfono debe contener un número de teléfono válido",
      });
    }

    if (campoPassword.value === "") {
      erroresEdit.push({
        campo: "password",
        errorMsg: "El campo de contraseña debe estar completo",
      });
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}/.test(campoPassword.value)
    ) {
      erroresEdit.push({
        campo: "password",
        errorMsg:
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un símbolo y tener al menos 6 caracteres",
      });
    }

    //Si hay errores
    if (erroresEdit.length > 0) {
      e.preventDefault();
      const errorNombre = document.querySelector(".text-danger.nombre");
      const errorApellido = document.querySelector(".text-danger.apellido");
      const errorEmail = document.querySelector(".text-danger.email");
      const errorNumTel = document.querySelector(".text-danger.numTel");
      const errorAvatar = document.querySelector(".text-danger.avatar");
      const errorPassword = document.querySelector(".text-danger.password");
      const ulErroresEdit = document.querySelector("div.erroresEdit ul");
      errorNombre.innerHTML = "";
      errorApellido.innerHTML = "";
      errorEmail.innerHTML = "";
      errorNumTel.innerHTML = "";
      errorPassword.innerHTML = "";

      for (let i = 0; i < erroresEdit.length; i++) {
        switch (erroresEdit[i]?.campo) {
          case "nombre":
            errorNombre.innerHTML += `<p>${erroresEdit[i].errorMsg}</p>`;
            break;
          case "apellido":
            errorApellido.innerHTML += `<p>${erroresEdit[i].errorMsg}</p>`;
            break;
          case "email":
            errorEmail.innerHTML += `<p>${erroresEdit[i].errorMsg}</p>`;
            break;
          case "numTel":
            errorNumTel.innerHTML += `<p>${erroresEdit[i].errorMsg}</p>`;
            break;
          case "avatar":
            errorAvatar.innerHTML += `<p>${erroresEdit[i].errorMsg}</p>`;
            break;
          case "password":
            errorPassword.innerHTML += `<p>${erroresEdit[i].errorMsg}</p>`;
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
