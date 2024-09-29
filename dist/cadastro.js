
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

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

const handleFormSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    event.preventDefault(); 
    const form = event.target;
 
    const nameInput = document.getElementById("productName");
    const imageInput = document.getElementById("productImage");
    const categorySelect = document.getElementById("category");
    const priceInput = document.getElementById("price");
    const quantityInput = document.getElementById("quantity");
    const descriptionTextarea = document.getElementById("description");

    if (!nameInput.value.trim() ||
        !((_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0]) ||
        categorySelect.value === "--- ESCOLHA ---" ||
        !priceInput.value ||
        !quantityInput.value ||
        !descriptionTextarea.value.trim()) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let imageDataURL;
    try {
        const file = imageInput.files[0];
        imageDataURL = yield readFileAsDataURL(file);
    }
    catch (error) {
        alert("Erro ao processar a imagem.");
        return;
    }

    const novoBurguer = {
        image: imageDataURL,
        name: nameInput.value.trim(),
        category: categorySelect.value,
        price: parseFloat(priceInput.value),
        quantity: parseInt(quantityInput.value, 10),
        description: descriptionTextarea.value.trim(),
    };

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

    burguerArray.push(novoBurguer);

    localStorage.setItem("burguerArray", JSON.stringify(burguerArray));

    alert("Produto cadastrado com sucesso!");

    form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("burguerForm");
    form.addEventListener("submit", handleFormSubmit);
});
export {};
