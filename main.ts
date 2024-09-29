import CardComponent from "./components/card.components.js";
import HeaderComponent from "./components/header.components.js";
import IBurguer from "./models/burguer.js";

const header = new HeaderComponent();

// Verifica se já existe o array de hambúrgueres no localStorage
const burguerJSON: string | null = localStorage.getItem("burguerArray");
let burguerArray: Array<IBurguer> = [];

if (!burguerJSON) {
    // Se não existir no localStorage, armazenar o array inicial
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
        // ... outros hambúrgueres
    ];
    localStorage.setItem("burguerArray", JSON.stringify(burguerArray));
} else {
    // Parsear o JSON e atribuir ao array
    burguerArray = JSON.parse(burguerJSON);
}

// Referência ao container de cards
const cardsList = document.getElementById("cards-list");

if (!cardsList) {
    console.error("Elemento cards-list não encontrado.");
} else {
    // Gera os cards dinamicamente
    burguerArray.forEach((burguer) => {
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
        cardsList.insertAdjacentHTML('beforeend', cardHTML);
    });
}

console.log(burguerArray);
