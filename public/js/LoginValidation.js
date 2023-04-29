window.addEventListener("load", function () {
  //Validación de front
  const campoEmail = document.querySelector("input.email");
  const campoPassword = document.querySelector("input.password");
  console.log("HOLA");
  //register
  let erroresLogin = [];
  const formularioLogin = document.querySelector("form.login");

  formularioLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(campoEmail);
    if (campoEmail.value === "") {
      erroresLogin.push({
        campo: "email",
        errorMsg: "El campo de correo electrónico debe estar completo",
      });
    }

    if (campoPassword.value === "") {
      erroresLogin.push({
        campo: "password",
        errorMsg: "El campo de contraseña debe estar completo",
      });
    } else if (
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}/.test(campoPassword.value)
    ) {
      erroresLogin.push({
        campo: "password",
        errorMsg:
          "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un símbolo y tener al menos 6 caracteres",
      });
    }

    //Si hay errores
    if (erroresLogin.length > 0) {
      console.log("Si hay errores");
      e.preventDefault();
      const errorEmail = document.querySelector(".text-danger.email");
      const errorPassword = document.querySelector(".text-danger.password");
      const ulErroresLogin = document.querySelector("div.erroresLogin ul");
      errorEmail.innerHTML = "";
      errorPassword.innerHTML = "";

      for (let i = 0; i < erroresLogin.length; i++) {
        console.log("for si")
        switch (erroresLogin[i]?.campo) {
          case "email":
            console.log("Error en gmail");
            errorEmail.innerHTML += `<p>${erroresLogin[i].errorMsg}</p>`;
            break;
          case "password":
            console.log("Error en contra");
            errorPassword.innerHTML += `<p>${erroresLogin[i].errorMsg}</p>`;
            break;

          default:
            ulErroresLogin.innerHTML += "<li>" + erroresLogin[i] + "<li>";
            break;
        }
      }
      erroresLogin = [];
    }
  });
});
