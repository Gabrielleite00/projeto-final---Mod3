// importação dos respectivos componentes: criar card, renderizar cabeçalho e definir o formato do objeto hamburguer. 

import CardComponent from "./components/card.components.js";
import HeaderComponent from "./components/header.components.js";
import IBurguer from "./models/burguer.js";


// Instancia, que faz que o meu cabeçalho seja renderizado. Ai aqui ela chamara o render() do meu header.components
const header = new HeaderComponent();

// aqui vai ser tentado recuperar a lista de hamburgueres já armazenados no meu local storage. Caso não tenha dados, retornará null, e caso tenha, retornará uma string JSON
const burguerJSON: string | null = localStorage.getItem("burguerArray");
let burguerArray: Array<IBurguer> = []; //inicializa a varíavel, que armazenará os itens



if (!burguerJSON) {
   
    burguerArray = [
        {
            image: "https://img.freepik.com/free-photo/front-view-burger-fries-plate_23-2148784444.jpg",
            name: "Code Crunch",
            price: 39.90,
            description: "Um hambúrguer de costela grelhado, bacon crocante, alface e molho especial."
        },
        {
            image: "https://img.freepik.com/free-photo/photorealistic-burger-meal_23-2151432928.jpg",
            name: "Bit Buster",
            price: 55.90,
            description: "Hambúrguer bovino, queijo cheddar, bacon crocante, e molho barbecue artesanal."
        },
       
    ];
    localStorage.setItem("burguerArray", JSON.stringify(burguerArray));
} else {

    burguerArray = JSON.parse(burguerJSON);
}


// seleciona no DOM os cartôes dos hamburgueres onde vão ser colocados os novos cards.
const cardsList = document.getElementById("cards-list");


// verifica se cards-list realmente existe, e se não for encontrado ele vai dar o erro informado no console.error
if (!cardsList) {
    console.error("Elemento cards-list não encontrado.");
} else {

    // para cada item no array, o codigo geraria o html de um card
    burguerArray.forEach((burguer) => {   

        // armazena o html de cada card em uma string
        const cardHTML = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${burguer.image}" class="card-img-top" alt="${burguer.name}">
                    <div class="card-body">
                        <h5 class="card-title">${burguer.name}</h5>
                        <p class="card-text">${burguer.description}</p>
                        <p class="card-text"><strong>Preço:</strong> R$ ${burguer.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;

        // inserindo o html de cada card no meu elemento cards-list 
        cardsList.insertAdjacentHTML('beforeend', cardHTML);
    });
}


// aoenas para exibir o array de hamburgueres no console do meu navegador. 
console.log(burguerArray);
