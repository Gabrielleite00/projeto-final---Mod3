import IBurguer  from "./models/burguer.js";

// Função para converter File em Data URL
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

// Função principal para lidar com o cadastro
const handleFormSubmit = async (event: Event) => {
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    const form = event.target as HTMLFormElement;

    // Captura dos elementos do formulário
    const nameInput = document.getElementById("productName") as HTMLInputElement;
    const imageInput = document.getElementById("productImage") as HTMLInputElement;
    const categorySelect = document.getElementById("category") as HTMLSelectElement;
    const priceInput = document.getElementById("price") as HTMLInputElement;
    const quantityInput = document.getElementById("quantity") as HTMLInputElement;
    const descriptionTextarea = document.getElementById("description") as HTMLTextAreaElement;

    // Validação básica dos campos
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

    // Processamento da imagem
    let imageDataURL: string;
    try {
        const file = imageInput.files[0];
        imageDataURL = await readFileAsDataURL(file);
    } catch (error) {
        alert("Erro ao processar a imagem.");
        return;
    }

    // Criação do objeto IBurguer
    const novoBurguer: IBurguer = {
        image: imageDataURL,
        name: nameInput.value.trim(),
        price: parseFloat(priceInput.value),
        description: descriptionTextarea.value.trim(),
    };

    // Recuperação do array existente do localStorage
    const burguerJSON: string | null = localStorage.getItem("burguerArray");
    let burguerArray: Array<IBurguer> = [];

    if (burguerJSON) {
        try {
            burguerArray = JSON.parse(burguerJSON);
        } catch (error) {
            console.error("Erro ao parsear burguerArray do localStorage:", error);
            alert("Erro ao processar os dados existentes. O cadastro não pôde ser concluído.");
            return;
        }
    }

    // Adição do novo hambúrguer ao array
    burguerArray.push(novoBurguer);

    // Armazenamento de volta no localStorage
    localStorage.setItem("burguerArray", JSON.stringify(burguerArray));

    // Feedback ao usuário
    alert("Produto cadastrado com sucesso!");

    // Limpeza do formulário
    form.reset();
};

// Adiciona o listener quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("burguerForm") as HTMLFormElement;
    form.addEventListener("submit", handleFormSubmit);
});