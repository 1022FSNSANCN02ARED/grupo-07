window.addEventListener("load", function () {
  //Validación de front
  const campoNombre = document.querySelector("input.nombre");
  const campoApellido = document.querySelector("input.apellido");
  const campoEmail = document.querySelector("input.email");
  const campoTelefono = document.querySelector("input.numTel");
  const campoAvatar = document.querySelector("input.avatar");
  const campoPassword = document.querySelector("input.password");

  //register
  let erroresRegister = [];
  const formularioRegister = document.querySelector("form.register");

  formularioRegister.addEventListener("submit", function (e) {
    if (campoNombre.value === "") {
      erroresRegister.push({
        campo: "nombre",
        errorMsg: "El campo de nombre debe estar completo",
      });
    } else if (campoNombre.value.length < 3) {
      erroresRegister.push({
        campo: "nombre",
        errorMsg: "El campo de nombre debe tener al menos 3 caracteres",
      });
    }

    if (campoApellido.value === "") {
      erroresRegister.push({
        campo: "apellido",
        errorMsg: "El campo de apellido debe estar completo",
      });
    } else if (campoApellido.value.length < 3) {
      erroresRegister.push({
        campo: "apellido",
        errorMsg: "El campo de apellido debe tener al menos 3 caracteres",
      });
    }

    if (campoEmail.value === "") {
      erroresRegister.push({
        campo: "email",
        errorMsg: "El campo de correo electrónico debe estar completo",
      });
    } else if (!campoEmail.value.includes("@")) {
      erroresRegister.push({
        campo: "email",
        errorMsg: "El campo de correo electrónico debe contener un '@'",
      });
    }

    if (campoTelefono.value === "") {
      erroresRegister.push({
        campo: "numTel",
        errorMsg: "El campo de teléfono debe estar completo",
      });
    } else if (campoTelefono.value == "") {
      erroresRegister.push({
        campo: "numTel",
        errorMsg:
          "El campo de teléfono debe contener un número de teléfono válido",
      });
    }

    if (campoPassword.value === "") {
      erroresRegister.push({
        campo: "password",
        errorMsg: "El campo de contraseña debe estar completo",
      });
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}/.test(campoPassword.value)
    ) {
      erroresRegister.push({
        campo: "password",
        errorMsg:
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un símbolo y tener al menos 6 caracteres",
      });
    }

    //Si hay errores
    if (erroresRegister.length > 0) {
      e.preventDefault();
      const errorNombre = document.querySelector(".text-danger.nombre");
      const errorApellido = document.querySelector(".text-danger.apellido");
      const errorEmail = document.querySelector(".text-danger.email");
      const errorNumTel = document.querySelector(".text-danger.numTel");
      const errorAvatar = document.querySelector(".text-danger.avatar");
      const errorPassword = document.querySelector(".text-danger.password");
      const ulErroresRegister = document.querySelector(
        "div.erroresRegister ul"
      );
      errorNombre.innerHTML = "";
      errorApellido.innerHTML = "";
      errorEmail.innerHTML = "";
      errorNumTel.innerHTML = "";
      errorPassword.innerHTML = "";

      for (let i = 0; i < erroresRegister.length; i++) {
        switch (erroresRegister[i]?.campo) {
          case "nombre":
            errorNombre.innerHTML += `<p>${erroresRegister[i].errorMsg}</p>`;
            break;
          case "apellido":
            errorApellido.innerHTML += `<p>${erroresRegister[i].errorMsg}</p>`;
            break;
          case "email":
            errorEmail.innerHTML += `<p>${erroresRegister[i].errorMsg}</p>`;
            break;
          case "numTel":
            errorNumTel.innerHTML += `<p>${erroresRegister[i].errorMsg}</p>`;
            break;
          case "avatar":
            errorAvatar.innerHTML += `<p>${erroresRegister[i].errorMsg}</p>`;
            break;
          case "password":
            errorPassword.innerHTML += `<p>${erroresRegister[i].errorMsg}</p>`;
            break;

          default:
            ulErroresRegister.innerHTML += "<li>" + erroresRegister[i] + "<li>";
            break;
        }
      }
      erroresRegister = [];
    }
  });
});
