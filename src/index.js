import { fillMain } from "./main_page";
import { fillVideo } from "./video_page";
import { questionFill } from "./question";
console.log("up and running");
const content = document.querySelector("#content");

fillMain();

const wtfBtn = document.querySelector(".wtf-btn");
const mainBtn = document.querySelector(".main-btn");
const questionBtn = document.querySelector(".question");

function empty(){
    while (content.firstChild){
        content.removeChild(content.firstChild);
    };
};

wtfBtn.addEventListener("click", () => {
    empty();
    fillVideo();
});
mainBtn.addEventListener("click", () => {
    empty();
    fillMain();
})

questionBtn.addEventListener("click", () => {
    empty();
    questionFill();
})