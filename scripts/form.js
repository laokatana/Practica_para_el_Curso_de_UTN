const input = document.querySelector("[data-input]")
const inputEmail = document.querySelector("[data-email]")
const buttonSuscripcion = document.querySelector(".btn")


buttonSuscripcion.addEventListener("click", (event) => {
  event.preventDefault()
  
  const back = () =>{
    location.href= "index.html"
  }

  if (input.value === "" && inputEmail.value === "") {
    alert("llene los campos para la suscripcion por favor")
  } else {
    alert("gracias por suscribirse")
    input.value = ""
    inputEmail.value = ""
    back();
  }

})