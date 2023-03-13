const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const pid2 = document.getElementById("#pid");
const input = document.querySelector("input");

console.log(h1);

console.log({
    h1,p,parrafito,pid,input
});

h1.innerText = "<br> si";
h1.innerHTML = "patito <br> Feo";
//console.log(h1.getAttribute("clasS"));S 
//h1.setAttribute("class","rojo");
//console.log(h1.getAttribute("clasS"));

h1.classList.add("rojo" , "verde");
//h1.classList.remove("rojo");

const img = document.createElement("img");

img.setAttribute("src" , "https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg")

pid2.append(img);