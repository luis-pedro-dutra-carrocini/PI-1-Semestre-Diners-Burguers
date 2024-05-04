let burgerArea = document.querySelector(".burgers-area");
let bebidasArea = document.querySelector(".bebidas-area");
let sobremesasArea = document.querySelector(".sobremesas-area");

produtosJson.forEach((item, index) => {
  let insereProduto = `
    <div class="burger">
        <div class="burger-img-area content-area">
            <img class="burger-img content-img" src="${item.img}" alt="${item.name}" srcset="" />
        </div>
        <div class="burger-infos content-infos">  
            <p class="burger-nome content-nome">${index+1} - ${item.name}</p>
            <p class="burger-descricao content-descricao">${item.tipo}</p>
            <p class="burger-ingredientes content-descricao">Ingredientes: ${item.description}</p>
        </div>
    </div>
    `;
    if (item.classe == "Burguer"){
        burgerArea.insertAdjacentHTML("beforeend", insereProduto);
    }else if (item.classe == "Bebida"){
        bebidasArea.insertAdjacentHTML("beforeend", insereProduto);
    }else if (item.classe == "Sobremesa"){
        sobremesasArea.insertAdjacentHTML("beforeend", insereProduto);
    }
  
});