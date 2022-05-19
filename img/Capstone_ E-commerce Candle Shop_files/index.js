const section = document.querySelector('section')

//Criação dinâmica dos cards de produtos:

const ul = document.createElement('ul')
ul.id = "tagUl"

    for(let i = 0; i < data.length; i++){
        
        const card = document.createElement('li')
        card.className = "card"        
        
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
        
        const button = document.createElement('button')
        button.className = "add_carrinho"
        button.innerText = "Adicionar ao Carrinho"
        
        
        card.append(img, tag, nome, descricao, preco, button)
        ul.appendChild(card)
        
    }
    
section.appendChild(ul)






