const btn = document.querySelector('.btn');

btn.addEventListener('click',() => {
    const selectDifficulty = document.getElementById('difficulty').value;
    const playingField = document.getElementById('playingField');
    const scoreRecorder = document.getElementById('scoreRecorder')
    scoreRecorder.classList.add('d-none');
    const randomContainer = [];
    if(selectDifficulty === ''){
        return;
    } else{
        console.clear();
        playingField.innerHTML = '';
        const squareNum = difficultySelector(selectDifficulty);
        for(let x = 0; x < 10; x++){
            randomContainer.push(getRandomIntInclusive(1, squareNum))
        }
        console.log(randomContainer);
        // console.log(squareNum);
        playingField.append(gridFieldGenerator(squareNum, randomContainer));
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

function gridFieldGenerator(squareNumber, randomContainer){
    const minedGrid = document.createElement('div');
    minedGrid.classList.add('minedGrid');
    for (let i = 0; i < squareNumber; i++){
        let box = boxGenerator(i, squareNumber, randomContainer);
        // console.log(box);
        minedGrid.append(box);
    }
    return minedGrid
}

function boxGenerator(squareIndex, squareNumber, randomContainer){
    const square = document.createElement('div');
    const squareDimension = Math.sqrt(squareNumber);
    const scoreRecorder = document.getElementById('scoreRecorder');
    score = 0;
    square.style.width = `calc(100% / ${squareDimension})`;
    square.style.height = square.style.width;
    square.classList.add('box');
    let boxAction = squareIndex + 1;;
    let boxColor = 'active-box';
    for(let x = 0; x < randomContainer.length; x++){
        if(squareIndex + 1 === randomContainer[x]){
             boxColor = 'boom-box';
             boxAction = 'BOOM!';
         };
    }
    square.innerHTML = squareIndex + 1; 
    square.addEventListener('click', () => {
        square.innerHTML = boxAction;
        square.classList.add(boxColor);
        if (boxColor === 'boom-box'){
            console.log('Hai perso!');
        } else{
            console.log(squareIndex + 1);
            score += 100;
            scoreRecorder.innerHTML = `<h4 class = 'display-3 text-danger fw-bold text-center'>Il tuo score</h4>
            <div class = 'fw-bold display-5 text-center text-light'>${score}</div>`;
            scoreRecorder.classList.remove('d-none');
        }
    }, {once : true});
    return square
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  