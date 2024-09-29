import IBurguer  from "./models/burguer.js";

// Função para converter o arquivo da imagem em uma url, que possa ser exibida e armazenada como string. 
const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === "string") {
                resolve(reader.result);
            } else {
                reject("Erro ao ler o arquivo.");
            }
        };
        reader.onerror = () => reject("Erro ao ler o arquivo.");
        reader.readAsDataURL(file);
    });
};

// envio de formulário.
const handleFormSubmit = async (event: Event) => {
    event.preventDefault(); // evita que após submeter o formulário, que a pagina recarregue. 


    // pegando os campos dos formulários, utilizando o document.getElementById
    //document.getElementById > usado para pegar um elemento do DOM com base no seu id
    // HTMLInputElement foi utilizado para o TS entender que o elemento retornado pelo document.getElementById é um campo input
    const form = event.target as HTMLFormElement;

    const nameInput = document.getElementById("productName") as HTMLInputElement;
    const imageInput = document.getElementById("productImage") as HTMLInputElement;
    const categorySelect = document.getElementById("category") as HTMLSelectElement;
    const priceInput = document.getElementById("price") as HTMLInputElement;
    const quantityInput = document.getElementById("quantity") as HTMLInputElement;
    const descriptionTextarea = document.getElementById("description") as HTMLTextAreaElement;



    // aqui é mais para validação do preenchimento das informações, ou seja, vai validar se o nome, imagem, preço... foi atribuido de forma correta. Caso tenha algum erro, ou alguma forma inválida, ele retorna um alerta, solicitando o preenchimento adequado das informações. 
    if (
        !nameInput.value.trim() ||
        !imageInput.files?.[0] ||
        categorySelect.value === "--- ESCOLHA ---" ||
        !priceInput.value ||
        !quantityInput.value ||
        !descriptionTextarea.value.trim()
    ) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let imageDataURL: string;
    try {
        const file = imageInput.files[0];
        imageDataURL = await readFileAsDataURL(file);
    } catch (error) {
        alert("Erro ao processar a imagem.");
        return;
    }



    // criação do objeto novoBuruger, de acordo com a interface pré-definida do IBurguer. Aqui ele vai armazenar os dados do produto a ser adicionado
    const novoBurguer: IBurguer = {
        image: imageDataURL, 
        name: nameInput.value.trim(),
        price: parseFloat(priceInput.value),
        description: descriptionTextarea.value.trim(),
    };


    // aqui onde ocorre a manipulação do localStorage
    const burguerJSON: string | null = localStorage.getItem("burguerArray"); // retornará os dados armazenado ou null caso não tenha nada salvo com a chave burguerArray
    let burguerArray: Array<IBurguer> = [];


    // if vai ser utilizado para verificar se já tem algum dado previamente salvo no localStorage, com a chave burguerArray
    if (burguerJSON) {
        try { // try catch está para capturar erros que possam ocorrem na hora de rodar o código, se o TRY executar o código, e algo der errado, o codigo cai no catch
            burguerArray = JSON.parse(burguerJSON); //converte a string burguerJSON para um array. 
        } catch (error) { // já o catch vai servir para executar o que está dentro dele (console.error e alert) se caso ocorrer algum erro na execução do JSON.parse
            console.error("Erro ao parsear burguerArray do localStorage:", error);
            alert("Erro ao processar os dados existentes. O cadastro não pôde ser concluído.");
            return;
        }
    }

    // pesquisando afundo para acrescentar essa funcionalidade, eu identifiquei que o try-catch ajuda a garantir que se por acaso algo der errado, o programa não quebre e informe ao usuário que algo deu errado, de uma forma mais dinamica. Até porque, adicionar dados no local storage, pode ter a chance de conter dados corrompidos ou mal formatados.
    // https://pt.stackoverflow.com/questions/58536/para-que-servem-os-blocos-try-catch-e-quando-devem-ser-utilizados


    // depois que um item for adicionado ao array, ele vai ser atualizado e salvo lá no localstorage, convertendo em string com o uso do JSON.stringfy
    burguerArray.push(novoBurguer);
    localStorage.setItem("burguerArray", JSON.stringify(burguerArray));

    //apenas um alerta para informar que o produto foi cadastrado.
    alert("Produto cadastrado com sucesso!");

    // formulário é zerado, para ficar limpo para o cadastro de um novo tipo de item
    form.reset();
};


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("burguerForm") as HTMLFormElement;
    form.addEventListener("submit", handleFormSubmit);
});