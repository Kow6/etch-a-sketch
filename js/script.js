
const pad = document.querySelector('.pad'); //set the pad class to the const pad

for (let r = 1; r < 17; r++){
    const gridRow = document.createElement('div'); //create a div that is the row
    gridRow.classList.add('container'); //add the container class to that div
    pad.appendChild(gridRow); //put the div with the class of container in the pad.




    for (let i = 1; i < 17; i++){  
    const gridBox = document.createElement('div')
    gridBox.classList.add('square')
    gridBox.textContent = i
    gridRow.appendChild(gridBox)
}
}