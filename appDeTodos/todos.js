var arrayTodos = JSON.parse(localStorage.getItem('list_todos')) || [];     //JSON.PARSE ta convertendo os itens em array novamente
var ul = document.querySelector('ul')
var novoTodo = document.querySelector('#todo');

function addTodo(){
    if(novoTodo.value == '' ){
        novoTodo.focus();
        return false;
    }
   
    arrayTodos.push(novoTodo.value); // ADICIONANDO UM NOVO Todo (NA ULTIMA POSIÇAO DO ARRAY) AO ARRAY 
    document.querySelector('#todo').value = ''; // APAGANDO O CONTEUDO INSERIDO NO INPUT
    render();
    saveToStorage();    
}

function render(){
    ul.innerHTML = ''

    for(var i = 0; i < arrayTodos.length; i++){
        var li = document.createElement('li');
            ul.appendChild(li)
            li.innerHTML = arrayTodos[i];

        var link = document.createElement('a')
            link.setAttribute('href', '#');

        var posicao = arrayTodos.indexOf(i);
            link.setAttribute('onclick', 'deleteTodo('+posicao+')');
             
        var espaco = document.createTextNode(' - ')
        var textLink = document.createTextNode('Excluir'); //cria o texto para o link
            li.appendChild(espaco);
            li.appendChild(link);
            link.appendChild(textLink)  ;  
    }
}

function deleteTodo(posicao){
    arrayTodos.splice(posicao, 1); //splice remove o item do array, 'posicao' é a posica do item no array, e '1' é a quantidade de itens
    render()
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(arrayTodos)); //salvando os itens no banco localStorage
                                                                    //list_todos é a chave que estou criando
                                                                    //JSON.stringfy são os valores, que tem como parametro o arrayTodos
}