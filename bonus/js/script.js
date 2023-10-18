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
    console.log(squareNum);
    const playingField = document.getElementById('playingField');
    playingField.innerHTML = '';
    playingField.append(gridFieldGenerator());
    // console.log(playingField)
});

function gridFieldGenerator(){
    const minedGrid = document.createElement('div');
    minedGrid.classList.add('minedGrid');
    for (let i = 0; i < squareNum; i++){
        let box = boxGenerator(i);
        // console.log(box);
        minedGrid.append(box);
    }
    return minedGrid
}

function boxGenerator(squareIndex, squareNumber){
    const square = document.createElement('div');
    square.classList.add('box');
    square.addEventListener('click', function(){
        square.classList.add('active-box');
        console.log(squareIndex + 1);
    });
    square.style.width = ``

    return square
};