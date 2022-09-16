function transformContent(){
    const name = prompt('Digite seu nome: ');

    const p = document.getElementById('p');
    p.innerText = `E aí ${name}! Você está deixando o seu site dinâmico.`;
}