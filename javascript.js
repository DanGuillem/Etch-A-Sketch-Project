// Default - Make a 16 x 16 grid by appending rows to container and appending cells to row

function createGrid(size) {
    const container = document.querySelector('div');
    for (let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
    
        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('cell')
            row.appendChild(div);
        }
    }

    cells = document.querySelectorAll('.cell');
    cells.forEach((div) => {
    
        div.addEventListener('mouseover', () => {
            div.classList.add('mousedover')
        });
});
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetGrid() {

    gridSize = prompt("How large would you like your grid? (Maximum 100, minimum 16)");

    if (gridSize <= 100 && gridSize >= 16){
        removeAllChildren(container);
        createGrid(gridSize);
    }
    else {
        prompt("Please enter a valid grid size")
    }
    
}

resetGridButton = document.querySelector('button');
resetGridButton.addEventListener('click', resetGrid);

createGrid(16);

// Adds class called 'mousedover' which changes cell color

cells = document.querySelectorAll('.cell');
cells.forEach((div) => {
    
        div.addEventListener('mouseover', () => {
            div.classList.add('mousedover')
        });
});