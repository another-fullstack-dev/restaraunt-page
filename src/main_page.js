import decal from "./pasta.png";

const content = document.querySelector("#content");

function fillMain(){
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    let p = document.createElement("p");
    h1.textContent = "PASTA";
    img.src = decal;
    p.textContent = "I realized there is too much text and elements to add and i dont care to do it so yeah.";
    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p);
};

export {fillMain};