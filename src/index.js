import { fillMain } from "./main_page";
import { fillVideo } from "./video_page";
console.log("up and running");
const content = document.querySelector("#content");

fillMain();

const wtfBtn = document.querySelector(".wtf-btn");
const mainBtn = document.querySelector(".main-btn");

wtfBtn.addEventListener("click", () => {
    while (content.firstChild){
        content.removeChild(content.firstChild);
    };
    fillVideo();
});
mainBtn.addEventListener("click", () => {
    while (content.firstChild){
        content.removeChild(content.firstChild);
    };
    fillMain();
})