// export default pois vai fazer o import de um elemento único, e não de vários, como seria com o export normal. 
export default class HeaderComponent {
    constructor() {
        const header = document.getElementById("header");
        if (header)
            header.innerHTML = this.render();
    }
    //função de retornar o html / manter a CRASE na mesma linha do return, senão dará erro. 
    render() {
        return `  
    <nav class="navbar navbar-expand-lg nav-custom">
    <div class="container-fluid">
        <img src="assets/download.png" alt="logo" class="logo-image">
        <span>DevBurguer</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto" id="navbar">
            <li class="nav-item">
                <a class="nav-link" href="#cardapio">Cardápio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="about.html">Sobre Nós</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contato">Contato</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="cadastro.html">Cadastrar Novo Item</a>
            </li>
            </ul>
        </div>
    </div>
    </nav>
    `;
    }
}
