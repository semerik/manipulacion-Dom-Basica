const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");


form.addEventListener("click",sumarVariosInput);


function sumarVariosInput(event){
    console.log({event});
   // event.preventDefault();

    alert("virus");
    console.log("holi");  
    console.log(input.value + input2.value);
    console.log(Number(input.value) + parseInt(input2.value));

    const resultadoF = Number(input.value) + parseInt(input2.value);

    resultado.innerText = resultadoF;
}

 