export default class CardComponent {
    constructor(novoBurguer) {
        const cardList = document.getElementById("cards-list");
        if (cardList) {
            // Adiciona o novo card (com inner.HTML naõ estava funcionando)
            cardList.insertAdjacentHTML('beforeend', this.render(novoBurguer));
        }
    }
    render(novoBurguer) {
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
