const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    const playingField = document.getElementById('playingField');
    playingField.innerHTML = '';
    playingField.append(gridFieldGenerator());
    // console.log(playingField)
});

function gridFieldGenerator(){
    const minedGrid = document.createElement('div');
    minedGrid.classList.add('minedGrid');
    let squareNum = 100;
    for (let i = 0; i < squareNum; i++){
        let box = boxGenerator(i);
        // console.log(box);
        minedGrid.append(box);
    }
    return minedGrid
}

function boxGenerator(squareIndex){
    const square = document.createElement('div');
    square.classList.add('box');
    square.innerHTML = squareIndex + 1;
    square.addEventListener('click', function(){
        square.classList.add('active-box');
        console.log(squareIndex + 1);
    });
    return square
};