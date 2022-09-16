let emptyDiv = true

const divContent = document.getElementById('divContent');
const content = document.createElement('img');

function addContent (){
    if(emptyDiv == true){
        content.src = 'imgqualquer.jpg';
        divContent.appendChild(content);
        emptyDiv = false
    }   
}