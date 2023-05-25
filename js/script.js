const container = document.querySelector('.container')


    for (let i = 1; i < 17; i++){  
    const gridBox = document.createElement('div')
    gridBox.classList.add('square')
    gridBox.textContent = i
    container.appendChild(gridBox)
}
