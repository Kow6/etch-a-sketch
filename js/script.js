const pad = document.querySelector('.pad'); //set the pad class to the const pad




for (let r = 0; r < 16; r++){ //loop to to all the rows
    const gridRow = document.createElement('div'); //create a div that is the row
    gridRow.classList.add('row'); //add the container class to that div
    pad.appendChild(gridRow); //put the div with the class of container in the pad.




    for (let i = 0; i < 16; i++){  //loop to do all the columns
    const gridBox = document.createElement('div');
    gridBox.classList.add('square');
    gridRow.appendChild(gridBox);
}
}

const boxes = document.querySelectorAll('.square')
boxes.forEach((boxes) =>{
boxes.addEventListener('mouseover', () => {
boxes.classList.add('hover') 
} )
})