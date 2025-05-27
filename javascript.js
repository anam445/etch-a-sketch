let container = document.getElementById("container");
let changeGrid = document.getElementById("changeGrid");

function createGrid(size){
    container.innerHTML = "";

    container.style.width = "800px";
    let squareSize  = `calc(800px / ${size})`; // fixed template literal

    for(let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = squareSize;
        square.style.height = squareSize;
        square.addEventListener("mouseover", () =>{
            square.classList.add("hovered");
        });
        container.appendChild(square);
    }
}

createGrid(16);

changeGrid.addEventListener("click", () => {
    let size = prompt("Enter the number of Squares: ");
    size = parseInt(size);
    if (size > 0 && size <= 100){
        createGrid(size);
    } else {
        alert("Enter a number between 1 and 100."); // fixed typo
    }
});
