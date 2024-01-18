

//* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//* evento click que ejecute un console log con la información del evento del click

  
  const btn = document.createElement("button");
  btn.textContent = "click";
  btn.id = "btnToClick";
  
  const click = document.querySelector(".click")
  
  btn.addEventListener("click", (event) => console.log(event))
  document.body.appendChild(btn);

   


//* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
  const inputFocus = document.querySelector(".focus");
  inputFocus.addEventListener("focus", (event) => console.log(event.target.value));
    
   



//* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input2 = document.querySelector(".value");

input2.addEventListener("input", (e) => console.log(e.target.value));
  
