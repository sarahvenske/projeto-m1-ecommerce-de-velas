const section = document.querySelector('section')

//Criação dinâmica dos cards de produtos:

const ul = document.createElement('ul')
ul.id = "tagUl"

let arrayObjetoCarrinho = []

for(let i = 0; i < data.length; i++){
    
    const card = document.createElement('li')
    card.className = "card"        
    
    const figure = document.createElement('figure')
    figure.className = "figure"

    const img = document.createElement('img')
    img.src = data[i].img
    
    const tag = document.createElement('div')
    tag.className = "tag"
    tag.innerText = data[i].tag
    
    const nome = document.createElement('div')
    nome.className = "nome"
    nome.innerText = data[i].nameItem
    
    const descricao = document.createElement('div')
    descricao.className = "descricao"
    descricao.innerText = data[i].description
    
    const preco = document.createElement('div')
    preco.className = "preco"
    preco.innerText = data[i].value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    const buttonAdd = document.createElement('button')
    buttonAdd.className = "add_carrinho"
    buttonAdd.innerText = "Adicionar ao Carrinho"
    
    figure.appendChild(img)
    card.append(figure, tag, nome, descricao, preco, buttonAdd)
    ul.appendChild(card)
    
//Modelar dados do click (criar um array de objetos - listaCarrinho)
    
    function adicionar(){
        arrayObjetoCarrinho.push(data[i])  
        // console.log(arrayObjetoCarrinho)
        renderizar()
        soma()
    }
//Interceptando o evento de click no botão de "Adicionar ao Carrinho":
    
    buttonAdd.addEventListener("click", adicionar)
}

section.appendChild(ul)

//Listar itens no carrinho de compras:

const produtosCarrinho = document.querySelector('.produtos_carrinho')

function renderizar(){
    console.log("renderizar")
    produtosCarrinho.innerHTML = ""
    
    if(arrayObjetoCarrinho.length == 0){
        produtosCarrinho.innerText = "Seu carrinho está vazio.."
    }else{
        for(let i = 0; i < arrayObjetoCarrinho.length; i++){
            
            const cardCarrinho = document.createElement('li')
            cardCarrinho.className = "card_carrinho"
            
            const div1 = document.createElement('div')
            div1.className = "div_1"

            const imgCarrinho = document.createElement('img')
            imgCarrinho.className = "img_carrinho"
            imgCarrinho.src = arrayObjetoCarrinho[i].img

            const div2 = document.createElement('div')
            div2.className = "div_2"
            
            const nomeCarrinho = document.createElement('div')
            nomeCarrinho.className = "nome_carrinho"
            nomeCarrinho.innerText = arrayObjetoCarrinho[i].nameItem
            
            const precoCarrinho = document.createElement('div')
            precoCarrinho.className = "preco_carrinho"
            precoCarrinho.innerText = arrayObjetoCarrinho[i].value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            
            const removerProduto = document.createElement('button')
            removerProduto.className = "botao_remover"
            removerProduto.id = i
            removerProduto.innerText = "Remover Produto"
            
            div1.appendChild(imgCarrinho)
            div2.append(nomeCarrinho, precoCarrinho, removerProduto)
            cardCarrinho.append(div1, div2)
            produtosCarrinho.appendChild(cardCarrinho)

            function remover(event){
                const button = event.target    
                arrayObjetoCarrinho.splice(button.id,1)

                renderizar()
                soma() 
            }
            removerProduto.addEventListener("click", remover)
        }
    }  
}    
renderizar()

//Incrementar valores de quantidade e valor total de carriho de compras: 

const boxQuantidade = document.querySelector('.box_quantidade')
const boxSoma = document.querySelector('.box_total')

function soma(){
    
    boxQuantidade.innerHTML = ""
    boxSoma.innerHTML = ""
    
    let numeroProdutos = arrayObjetoCarrinho.length
    let soma = 0
    
    if(numeroProdutos > 0){

        for(let i = 0; i < numeroProdutos; i++){
            soma += arrayObjetoCarrinho[i].value
        }
        
        const textoQde = document.createElement('div')
        textoQde.innerText = "Quantidade:"
        
        const qdeTotal = document.createElement('div')
        qdeTotal.className = "qde_total"
        qdeTotal.innerText = numeroProdutos
        
        const textoTotal = document.createElement('div')
        textoTotal.innerText = "Total:"
        
        const vlrTotal = document.createElement('div')
        vlrTotal.className = "vlr_total"
        vlrTotal.innerText = soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        
        boxQuantidade.append(textoQde, qdeTotal)
        boxSoma.append(textoTotal, vlrTotal)
    }
}   

soma()











    
    

