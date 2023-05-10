// Make a 16 x 16 grid by appending rows to container and appending cells to row
for (let i = 0; i < 16; i++){
    const container = document.querySelector('div');

    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);

    for (let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('cell')
        row.appendChild(div);
    }
}

