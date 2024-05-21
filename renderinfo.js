export function renderInfo(data) {
    //Create Modal
   const modal = document.createElement("div")
    modal.className = "modalmask"
    modal.setAttribute("id", "modal1")
    document.body.appendChild(modal);

    const modalChild = document.createElement("div")
    modalChild.className = "modalbox movedown container"
    modal.appendChild(modalChild)
    

    const a = document.createElement("a")
    a.className = "close"
    a.setAttribute("href", "#close")
    const newContent = document.createTextNode("X")
    a.appendChild(newContent)
    modalChild.appendChild(a)

    //Create first line of the Modal 

    const divRow = document.createElement("div")
    divRow.className = "row"
    modalChild.appendChild(divRow)

    const title = document.createElement("h2")
    let titleContent = document.createTextNode(data.name.toUpperCase())
    title.appendChild(titleContent)
    divRow.appendChild(title)
    title.className = "col-12 titleInfo"

    const hr = document.createElement("hr")
    modalChild.appendChild(hr)
    
    //Create second line of the Modal

    const divRow2 = document.createElement("div")
    divRow2.className = "row"
    modalChild.appendChild(divRow2)

    const ability = document.createElement("p")
    let abilityContent = document.createTextNode(data.abilities[0].ability.name)
    abilityContent = abilityContent.data
    ability.innerHTML = `Habilidad principal: ${abilityContent}`
    ability.className = "col-4 cardInfo"
    divRow2.appendChild(ability)

    const type = document.createElement("p")
    let typeContent = document.createTextNode(data.types[0].type.name)
    typeContent = typeContent.data
    type.innerHTML = ` Tipo: ${typeContent}`
    type.className = "col-4 cardInfo"
    divRow2.appendChild(type)

    const id = document.createElement("p")
    let idNumber = document.createTextNode(data.id)
    idNumber = idNumber.data
    id.innerHTML = `Número de Pokémon: ${idNumber}`
    id.className = "col-4 cardInfo"
    divRow2.appendChild(id)

    const hr2 = document.createElement("hr")
    modalChild.appendChild(hr2)

    a.addEventListener("click", function () {
        while (modal.firstChild){
            modal.removeChild(modal.firstChild);
          };
          modal.parentNode.removeChild(modal);
    });

}