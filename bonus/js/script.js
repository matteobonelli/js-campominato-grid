const btn = document.querySelector('.btn');

btn.addEventListener('click',() => {
    const selectDifficulty = document.getElementById('difficulty').value;
    const playingField = document.getElementById('playingField');
    if(selectDifficulty === ''){
        return;
    } else{
        console.clear();
        playingField.innerHTML = '';
        const squareNum = difficultySelector(selectDifficulty);
        // console.log(squareNum);
        playingField.append(gridFieldGenerator(squareNum));
        // console.log(playingField)
    }
});

function difficultySelector(selectDifficulty){
    let squareNum;
    if (selectDifficulty === 'easy'){
        squareNum = 100;
    } else if (selectDifficulty === 'medium'){
        squareNum = 81;
    } else if (selectDifficulty === 'hard'){
        squareNum = 49;
    }
    return squareNum
}

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
    square.addEventListener('click', () => {
        square.classList.add('active-box');
        console.log(squareIndex + 1);
    }, {once : true});
    return square
};