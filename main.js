import { renderInfo } from "./renderInfo.js"
let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
let numPag = document.getElementById("numPag")
let pageNumber = 1

function renderPage() {
    fetch(url)
        .then(res => res.json())
        .then(data => {

            const container = document.getElementById("container")

            for (let i = 0; i < 20; i++) {

                let pokemon = data.results[i]

                let urlPokemon = pokemon.url

                fetch(urlPokemon)
                    .then(res => res.json())
                    .then(data => {
                        let imgUrl = data.sprites.front_default

                        const img = document.createElement("img");
                        img.src = imgUrl;
                        img.className = "card-img-top";
                        card.appendChild(img);
                        card.appendChild(cardBody);
                    })

                const card = document.createElement("div");
                card.className = "card"

                const cardBody = document.createElement("div");
                cardBody.className = "card-body";

                const cardText = document.createElement("p");
                cardText.className = "card-text";
                cardText.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

                cardBody.appendChild(cardText);
                container.appendChild(card);

            }

            for (let i = 0; i < container.childNodes.length; i++) {
                (function (i) {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            let pokemon = data.results[i]
                            let urlPokemon = pokemon.url

                            container.childNodes[i].addEventListener("click", function () {
                                fetch(urlPokemon)
                                    .then(resPoke => resPoke.json())
                                    .then(dataPoke => {
                                        renderInfo(dataPoke)
                                        window.location.href = "#modal1"
                                    })
                            })
                        })
                })(i)
            }
            numPag.innerText = pageNumber
        })
}

document.getElementById("nextPage").addEventListener("click", function () {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            url = data.next
            while (container.firstChild)
                container.removeChild(container.firstChild)
            pageNumber++
            renderPage()
        })
})

document.getElementById("previousPage").addEventListener("click", function () {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.previous == null) {
                alert("No hay una página anterior")
            } else {
                url = data.previous
                while (container.firstChild)
                    container.removeChild(container.firstChild)
                pageNumber--
                renderPage()
            }
        })
})

renderPage()