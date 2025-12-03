function criarItemCardapio(titulo, descricao, foto){

    const divItemCardapio = document.createElement('div')
    divItemCardapio.className = 'item-cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo 

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'

    const img = document.createElement('img')
    img.src = foto 
    img.className = 'img-item'

    const divC = document.getElementById('cardapio')

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img)

    divC.appendChild(divItemCardapio)
}

async function getData() {
  const url = "https://confeitaria-api-imbb.onrender.com/cardapio";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    for(let i = 0; i < result.length; i++){
        criarItemCardapio(
        result.titulo,
        result.descricao,
        result.foto
        )
    }
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
