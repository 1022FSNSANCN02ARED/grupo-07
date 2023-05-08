window.addEventListener("load", function () {
  //Validación de front
  const campoEmail = document.querySelector("input.email");
  const campoPassword = document.querySelector("input.password");
  const ulErroresLogin= document.querySelector("div.erroresLogin ul");
  
  //register
  let erroresLogin = [];
  const formularioLogin = document.querySelector("form.login");


  formularioLogin.addEventListener("submit", function (e) {
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
    } 

    //Si hay errores
    if (erroresLogin.length > 0) {
      e.preventDefault();
      const errorEmail = document.querySelector(".text-danger.email");
      const errorPassword = document.querySelector(".text-danger.password");
      //const ulErroresLogin = document.querySelector("div.erroresLogin ul");
      errorEmail.innerHTML = "";
      errorPassword.innerHTML = "";

      for (let i = 0; i < erroresLogin.length; i++) {
        switch (erroresLogin[i]?.campo) {
          case "email":
            errorEmail.innerHTML += `<p>${erroresLogin[i].errorMsg}</p>`;
            break;
          case "password":
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
