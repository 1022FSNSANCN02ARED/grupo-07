window.addEventListener("load", function () {
    //Validación de front
    const campoEmail = document.querySelector("input.email");
    const campoPassword = document.querySelector("input.password");
  
    //register
    let erroresLogin = [];
    const formularioLogin = document.querySelector("form.Login");
  
    formularioLogin.addEventListener("submit", function (e) {
      //e.preventDefault();
      if (campoNombre.value === "") {
        erroresLogin.push({
          campo: "nombre",
          errorMsg: "El campo de nombre debe estar completo",
        });
      } else if (campoNombre.value.length < 3) {
        erroresLogin.push({
          campo: "nombre",
          errorMsg:  "El campo de nombre debe tener al menos 3 caracteres",
        }
         
        );
      }
  
      if (campoApellido.value === "") {
        erroresLogin.push({
          campo: "apellido",
          errorMsg: "El campo de apellido debe estar completo",
        });
      } else if (campoApellido.value.length < 3) {
        erroresLogin.push({
          campo: "apellido",
          errorMsg: "El campo de apellido debe tener al menos 3 caracteres",
        }
          
        );
      }
  
      if (campoEmail.value === "") {
        erroresLogin.push({
          campo: "email",
          errorMsg: "El campo de correo electrónico debe estar completo",
        }
          
        );
      } else if (!campoEmail.value.includes("@")) {
        erroresLogin.push({
          campo: "email",
          errorMsg: "El campo de correo electrónico debe contener un '@'",
        }
          
        );
      }
  
      if (campoTelefono.value === "") {
        erroresLogin.push({
          campo: "numTel",
          errorMsg: "El campo de teléfono debe estar completo",
        });
      } else if (campoTelefono.value=="") {
        erroresLogin.push({
          campo: "numTel",
          errorMsg: "El campo de teléfono debe contener un número de teléfono válido",
        }
          
        );
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
          errorMsg:  "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un símbolo y tener al menos 6 caracteres",
        }
         
        );
      }
  
      //Si hay errores
      if (erroresLogin.length > 0) {
        e.preventDefault();
        const errorNombre = document.querySelector(".text-danger.nombre");
        const errorApellido = document.querySelector(".text-danger.apellido");
        const errorEmail = document.querySelector(".text-danger.email");
        const errorNumTel = document.querySelector(".text-danger.numTel");
        const errorAvatar = document.querySelector(".text-danger.avatar");
        const errorPassword = document.querySelector(".text-danger.password");
        const ulErroresLogin = document.querySelector(
          "div.erroresLogin ul"
        );
          errorNombre.innerHTML='';
          errorApellido.innerHTML='';
          errorEmail.innerHTML='';
          errorNumTel.innerHTML='';
          errorPassword.innerHTML='';
  
        for (let i = 0; i < erroresLogin.length; i++) {
          switch (erroresLogin[i]?.campo) {
            case "nombre":
              errorNombre.innerHTML += `<p>${erroresLogin[i].errorMsg}</p>`;
              break;
            case "apellido":
              errorApellido.innerHTML += `<p>${erroresLogin[i].errorMsg}</p>`;
              break;
            case "email":
              errorEmail.innerHTML += `<p>${erroresLogin[i].errorMsg}</p>`;
              break;
            case "numTel":
              errorNumTel.innerHTML += `<p>${erroresLogin[i].errorMsg}</p>`;
              break;
            case "avatar":
              errorAvatar.innerHTML += `<p>${erroresLogin[i].errorMsg}</p>`;
              break;
            case "password":
              errorPassword.innerHTML += `<p>${erroresLogin[i].errorMsg}</p>`;
              break;
  
            default:
              ulErroresLogin.innerHTML += "<li>" + erroresLogin[i] + "<li>";
              break;
          }
        }
        erroresLogin=[];
      }
    });
  });
  