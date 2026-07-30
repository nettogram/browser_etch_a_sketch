const eccContainer = document.querySelector(".canvas");
const gridCount = 16 * 16;

for (let i = 0; i < gridCount; i++) {
    const eccSquare = document.createElement("div");
    eccSquare.setAttribute("style", "background-color: red; border: 2px solid black; height: 30px; width: 30px;")
    eccSquare.textContent = " ";
    eccContainer.appendChild(eccSquare);
}
