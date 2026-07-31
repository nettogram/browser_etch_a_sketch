const eccContainer = document.querySelector(".canvas");
let boxCount = 16;
const gridCount = boxCount * boxCount;
eccContainer.style.height = boxCount * 20;

for (let i = 0; i < gridCount; i++) {
    const eccSquare = document.createElement("div");
    eccSquare.style.height = "20px";
    eccSquare.style.width = "20px";
    eccSquare.textContent = " ";
    eccContainer.appendChild(eccSquare);
    eccSquare.addEventListener("mouseover", (event) => eccSquare.style.backgroundColor = "black")
}

