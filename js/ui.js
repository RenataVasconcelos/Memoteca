import  api  from "./api.js"

const ui = {
    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos")

            try{
                const pensamentos = await api.buscarPensamentos()
                pensamentos.forEach(pensamentos => {
                    listaPensamentos.innerHTML += `
                        <li class="li-pensamento" data-id="${pensamentos.id}">
                        <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
                        <div class="pensamento-conteudo">${pensamentos.conteudo}</div>
                        <div class="pensamento-autoria">${pensamentos.autoria}</div>`
                    
                });

            }
            catch{
                alert('Erro ao renderizar pensamentos')

            }
        
    }
}

export default ui;