
import CardComponent from "./components/card.components.js";
import HeaderComponent from "./components/header.components.js";
const header = new HeaderComponent();
const burguerArray = [
    {
        image: "https://img.freepik.com/free-photo/front-view-burger-fries-plate_23-2148784444.jpg?t=st=1727549827~exp=1727553427~hmac=6a4ea676a426696a539b06fc28e15c805b3542b2adf11bd8396b6390b376f6a6&w=996",
        name: "Code Crunch",
        price: 39.90,
        description: "Em um pão macio e dourado, recheado com uma generosa porção de hambúrguer de costela grelhado, muito suculenta por dentro. Camadas de cebola roxa fresca adicionam um toque suave e adocicado, enquanto a alface e fatias de tomate trazem uma leve acidez e frescor. Para finalizar, pedaços de bacon crocante, com um molho especial irresistível.",
    },
    {
        image: "https://img.freepik.com/free-photo/photorealistic-burger-meal_23-2151432928.jpg?t=st=1727550938~exp=1727554538~hmac=0f529d4acb138cbe53c2f19f9594d7351fb9add9d7c3c7ec44d2042906b4e91f&w=740",
        name: "Bit Buster",
        price: 55.90,
        description: "O Bit Buster combina um suculento e generoso disco de carne bovina premium, coberto com queijo cheddar derretido, bacon crocante, cebolas caramelizadas, alface fresca e um toque de molho barbecue artesanal, tudo dentro de um pão brioche tostado na manteiga.",
    },
    {
        image: "https://img.freepik.com/free-photo/photorealistic-burger-meal_23-2151293032.jpg?t=st=1727551109~exp=1727554709~hmac=ce70c276d5f56e451a742febaf89c5c79fe05fe8a12fa20203d29699289c1b24&w=740",
        name: "Byte Blaster",
        price: 50,
        description: "O Byte Blaster traz uma explosão de sabores em cada mordida. Um hambúrguer bovino  grelhado, marinado em ervas finas, é complementado por queijo gouda derretido, alface fresca, com rodelas finas de tomates e picles, e um molho especial de iogurte com hortelã, tudo dentro de um pão integral artesanal."
    },
    {
        image: "https://img.freepik.com/free-photo/view-delicious-burger-with-buns-cheese_23-2150887796.jpg?t=st=1727551475~exp=1727555075~hmac=f29b20deaa77dbd2282359995d89e6ae99d6e88210bc8196226cce51cf9bb930&w=740",
        name: "Kernel King",
        price: 57.90,
        description: "O Kernel King é um verdadeiro reinado de sabores, com um suculento hambúrguer de carne bovina temperada com especiarias, coberto com uma camada generosa de queijo derretido, alface crocante, finalizado com um toque de molho artesanal de tomates frescos e servido em um pão de centeio levemente tostado"
    },
    {
        image: "https://img.freepik.com/free-photo/view-delicious-burger-with-buns-cheese_23-2150887828.jpg?t=st=1727551306~exp=1727554906~hmac=ed1a248eda29e68d7f65e1019cae532b4d7441e08e4c904c9860f7cd678b83a3&w=740",
        name: "Bug Buster",
        price: 60.90,
        description: "O Bug Buster é um hambúrguer projetado para eliminar a fome e os erros do seu dia! Com um suculento hambúrguer de carne grelhada, coberto com queijo cheddar derretido, cebolas caramelizadas e um molho especial de mostarda e mel, este lanche é a solução perfeita para qualquer programador. Servido em um pão artesanal levemente tostado e acompanhado de batatas fritas crocantes."
    },
    {
        image: "https://img.freepik.com/fotos-gratis/hamburguer-com-fritas-na-mesa_23-2148678805.jpg?t=st=1727557229~exp=1727560829~hmac=f03d6741063b35edc1f0ba37007a35312354c42e6b9fde9b04038c4d1fbb4038&w=740",
        name: "Stack Overflow",
        price: 65.90,
        description: "O Stack Overflow é um hambúrguer que garante satisfazer todas as suas necessidades de sabor! Com dois generosos hambúrgueres de carne bovina temperada, coberto com queijo derretido, bacon crocante, com um molho artesanal defumado, este lanche é o verdadeiro top da sua lista! Servido em um pão de brioche macio e acompanhado de anéis de cebola crocantes."
    }
];

const burguerJSON = localStorage.getItem("burguerArray");
let burguerJSONArray = [];
if (!burguerJSON) {

    localStorage.setItem("burguerArray", JSON.stringify(burguerArray));
    burguerJSONArray = burguerArray;
}
else {

    burguerJSONArray = JSON.parse(burguerJSON);
}
console.log(burguerArray);
for (let burguer of burguerArray) {
    const card = new CardComponent(burguer);
}
