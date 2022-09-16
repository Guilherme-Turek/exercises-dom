let count = 0;
const p = document.getElementById('p');

function increment(){
    count++;
    p.innerHTML = `O contador está em ${count} cliques`
}

function reset(){
    count = 0;
    p.innerHTML = '';
}