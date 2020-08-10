document.querySelector("#add-time")
.addEventListener('click', ()=>{

    //duplica os campos. quais campos?
    var newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);//true - pega o conteudo e todos os filhos

    //limpar os campos. que campos?
    var fields = newFieldContainer.querySelectorAll('input');

    fields.forEach((field)=> {
        field.value = "";
    });

    //colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);//add um filho
});