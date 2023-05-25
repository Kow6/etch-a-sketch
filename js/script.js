const pad = document.querySelector('.pad'); //set the pad class to the const pad


//Define funtion to create grid

function createGrid(squaresPerSide){

//check and remove for nodes KEEP THIS
while (pad.hasChildNodes()){
pad.removeChild(pad.firstChild)
}
//end remove

for (let r = 0; r < squaresPerSide; r++){ //loop to to all the rows
    const gridRow = document.createElement('div'); //create a div that is the row
    gridRow.classList.add('row'); //add the container class to that div
    pad.appendChild(gridRow); //put the div with the class of container in the pad.




    for (let i = 0; i < squaresPerSide; i++){  //loop to do all the columns
    const gridBox = document.createElement('div');
    gridBox.classList.add('square');
    gridRow.appendChild(gridBox);
}
}

//event listener for mouseover to add a css class to make dark
const boxes = document.querySelectorAll('.square')
boxes.forEach((boxes) =>{
boxes.addEventListener('mouseover', () => {
boxes.classList.add('hover') 
} )
})

}
//End Function



createGrid(16) //run funtion to create the grid

//Add Event Listener on the button
const button = document.querySelector('button')
button.addEventListener('click', () => {

let squarePerSide = prompt('Please enter the number of squares per side.')
if (squarePerSide < 100){createGrid(squarePerSide)
}
else (alert('Choose a number below 100, please')
)

})