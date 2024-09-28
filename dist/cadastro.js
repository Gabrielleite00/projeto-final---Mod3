// src/cadastro.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Função para converter File em Data URL
const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === "string") {
                resolve(reader.result);
            }
            else {
                reject("Erro ao ler o arquivo.");
            }
        };
        reader.onerror = () => reject("Erro ao ler o arquivo.");
        reader.readAsDataURL(file);
    });
};
// Função principal para lidar com o cadastro
const handleFormSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    event.preventDefault(); // Impede o comportamento padrão de submissão do formulário
    const form = event.target;
    // Captura dos elementos do formulário
    const nameInput = document.getElementById("productName");
    const imageInput = document.getElementById("productImage");
    const categorySelect = document.getElementById("category");
    const priceInput = document.getElementById("price");
    const quantityInput = document.getElementById("quantity");
    const descriptionTextarea = document.getElementById("description");
    // Validação básica dos campos
    if (!nameInput.value.trim() ||
        !((_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0]) ||
        categorySelect.value === "--- ESCOLHA ---" ||
        !priceInput.value ||
        !quantityInput.value ||
        !descriptionTextarea.value.trim()) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    // Processamento da imagem
    let imageDataURL;
    try {
        const file = imageInput.files[0];
        imageDataURL = yield readFileAsDataURL(file);
    }
    catch (error) {
        alert("Erro ao processar a imagem.");
        return;
    }
    // Criação do objeto IBurguer
    const novoBurguer = {
        image: imageDataURL,
        name: nameInput.value.trim(),
        category: categorySelect.value,
        price: parseFloat(priceInput.value),
        quantity: parseInt(quantityInput.value, 10),
        description: descriptionTextarea.value.trim(),
    };
    // Recuperação do array existente do localStorage
    const burguerJSON = localStorage.getItem("burguerArray");
    let burguerArray = [];
    if (burguerJSON) {
        try {
            burguerArray = JSON.parse(burguerJSON);
        }
        catch (error) {
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
});
// Adiciona o listener quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("burguerForm");
    form.addEventListener("submit", handleFormSubmit);
});
export {};
