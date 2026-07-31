const eccContainer = document.querySelector(".canvas");
const changeResolutionButton = document.querySelector("button");

let boxCount = 16;
let gridCount = boxCount * boxCount;

function setGridCount() {
    gridCount = boxCount * boxCount;

}

function setCanvasSize() {
    eccContainer.style.height = `${boxCount * 20}px`;
    eccContainer.style.width = `${boxCount * 20}px`;
}

function createCanvas() {
    for (let i = 0; i < gridCount; i++) {
        const eccSquare = document.createElement("div");
        eccSquare.style.height = "20px";
        eccSquare.style.width = "20px";
        eccSquare.textContent = " ";
        eccSquare.classList.add("canvas-pixels")
        eccContainer.appendChild(eccSquare);
        eccSquare.addEventListener("mouseover", (event) => eccSquare.style.backgroundColor = "black");
        console.log(document.querySelectorAll(".canvas-pixels").length);
    }
}

function removeCanvas() {
    let currentResolution = document.querySelectorAll(".canvas-pixels");
    for (let i = 0; i < gridCount; i++)
    currentResolution[i].remove();
}

function changeResolution() {
    let resolution = prompt("Enter a new resolution between 0 and 50");
    if (resolution > 0 && resolution <= 50) {
        removeCanvas();
        boxCount = resolution;
        setGridCount();
        setCanvasSize();
        createCanvas();
    }

}

createCanvas();
changeResolutionButton.addEventListener("click", changeResolution);