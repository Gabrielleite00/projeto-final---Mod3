
// importando a interface IBurguer, que está definindo a minha estrutura do objeto Burguer
import IBurguer from "../models/burguer";




// cardComponente vai ser responsável por renderizar o card do hamburguer na minha pagina. 
// já o construtor vai receber um objeto (novoBurguer) do tipo IBurguer
export default class CardComponent {
    constructor(novoBurguer: IBurguer) {
        const cardList = document.getElementById("cards-list");

        if (cardList) {
            // Adiciona o novo card (com inner.HTML naõ estava funcionando, precisei de uma alternativa com o insertAdjacentHTML - https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
            cardList.insertAdjacentHTML('beforeend', this.render(novoBurguer));
        }
    }

    // aqui vai ser onde irá ser criado a estrutura do HTML do card, através do metodo render. Ele vai retornar uma string com o html do card, baseado nas propriedades do novoBurguer
    //estrutura do card está em bootstrap
    render(novoBurguer: IBurguer) {
        return ` 
        <div class="col-md-6 card-spacing">
            <div class="card mb-3" style="max-width: 640px;">
                <div class="row g-4">
                    <div class="col-md-4 d-flex justify-content-center align-items-center">
                        <img src="${novoBurguer.image}" class="img-fluid"
                            style="height:300px; padding-left: 5px;" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${novoBurguer.name}</h5>
                            <p class="card-text">${novoBurguer.description}</p>
                            <button type="button" class="btn btn-outline-success">Adicione ao Carrinho</button>
                            <button type="button" class="btn btn-outline-danger">Remova Item</button>
                            <ul class="list-group mt-3">
                                <li class="list-group-item">R$ ${novoBurguer.price.toFixed(2)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}
