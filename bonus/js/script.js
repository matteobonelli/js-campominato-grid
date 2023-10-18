const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    const selectDifficulty = document.getElementById('difficulty').value;
    let squareNum;
    if (selectDifficulty === 'easy'){
        squareNum = 100;
    } else if (selectDifficulty === 'medium'){
        squareNum = 81;
    } else if (selectDifficulty === 'hard'){
        squareNum = 49;
    } else {
        return
    }
    console.log(selectDifficulty);
    const playingField = document.getElementById('playingField');
    playingField.innerHTML = '';
    playingField.append(gridFieldGenerator(squareNum));
    // console.log(playingField)
});

function gridFieldGenerator(squareNumber){
    const minedGrid = document.createElement('div');
    minedGrid.classList.add('minedGrid');
    for (let i = 0; i < squareNumber; i++){
        let box = boxGenerator(i, squareNumber);
        // console.log(box);
        minedGrid.append(box);
    }
    return minedGrid
}

function boxGenerator(squareIndex, squareNumber){
    const square = document.createElement('div');
    const squareDimension = Math.sqrt(squareNumber);
    square.style.width = `calc(100% / ${squareDimension})`;
    square.style.height = square.style.width;
    square.classList.add('box');
    square.innerHTML = squareIndex + 1;
    square.addEventListener('click', function(){
        square.classList.add('active-box');
        console.log(squareIndex + 1);
    });
    return square
};