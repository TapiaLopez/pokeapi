

const pokeUrl= 'https://pokeapi.co/api/v2/pokemon/'
const numMaxPokemon = 151;
const gallery$$ = document.querySelector(".gallery")



function getCards(){
    for (let index = 1; index <= numMaxPokemon; index++){
buscarPokemon(index)
    }
    

function buscarPokemon(index){
    fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    .then((res) => res.json())
    .then((resParsedToJson) => {
        console.log(resParsedToJson)
        printCards(resParsedToJson)
    })

}
}





    const printCards = (Card) => {
        
        const figure$$ = document.createElement("figure");
        const title$$ = document.createElement("h2");
        const image$$ = document.createElement("img");
        const type$$ = document.createElement("p")
        const div$$ = document.createElement("div")

        title$$.textContent = Card.name;
        image$$.src = Card.sprites.other.dream_world.front_default;
        type$$.textContent = Card.types.map((item) => item.type.name);
        div$$.appendChild(image$$)

        div$$.appendChild(title$$);
        gallery$$.appendChild(figure$$);
        div$$.appendChild(type$$)
        figure$$.appendChild(div$$)
        
        div$$.className="englobadorImagenes"
        image$$.className="imagenesApi"
        type$$.className="texto"
        title$$.className="title"

        div$$.addEventListener('mouseover', () => {
            title$$.textContent ='';
            type$$.textContent ='';
        })
        div$$.addEventListener('mouseout', () => {
            title$$.textContent =  Card.name;
            type$$.textContent = Card.types.map((item) => item.type.name);
        })

    }

getCards()