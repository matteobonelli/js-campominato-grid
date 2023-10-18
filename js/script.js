const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    const minedGrid = document.getElementById('minedGrid');
    squareNum = 100;
    for (let i = 0; i < squareNum; i++){
        let box = boxGenerator(i);
        // console.log(box);
        minedGrid.append(box);
    }
});

function boxGenerator(squareIndex){
    const square = document.createElement('div');
    square.classList.add('box');
    square.addEventListener('click', function(){
        square.classList.add('active-box');
        console.log(squareIndex + 1);
    });
    return square
};