import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
    const pokemons = [
        {
            "id": "4949a4d5-735d-48cb-90d0-5b93dd25ea80",
            "name": "largando baranda",
            "image": "img",
            "hp": 30,
            "attack": 40,
            "defense": 14,
            "speed": 400,
            "height": 12,
            "weight": 4,
            "created": true
        },
        {
            "id": "4892f045-866a-4159-9c5c-c13aa40cf65e",
            "name": "pikachu de marihuana",
            "image": "img",
            "hp": 30,
            "attack": 40,
            "defense": 14,
            "speed": 400,
            "height": 12,
            "weight": 4,
            "created": true
        },
        {
            "id": "91bcae4d-9cd4-4525-839e-19a91a974cdf",
            "name": "pikachu",
            "image": "img",
            "hp": 30,
            "attack": 40,
            "defense": 14,
            "speed": 400,
            "height": 12,
            "weight": 4,
            "created": true
        },
        {
            "id": "1caf37b9-2eca-46c4-8715-a0ba8efb5a78",
            "name": "bulba",
            "image": "img",
            "hp": 30,
            "attack": 40,
            "defense": 14,
            "speed": 400,
            "height": 12,
            "weight": 4,
            "created": true
        },
        {
            "id": "ac679f3b-f342-4a76-b175-6026351e3a05",
            "name": "bulbasaur",
            "image": "img",
            "hp": 30,
            "attack": 40,
            "defense": 14,
            "speed": 400,
            "height": 12,
            "weight": 4,
            "created": true
        },
        {
            "id": "5a0aaa89-d6a7-422b-ac2e-a4919870ef63",
            "name": "asuca",
            "image": "img",
            "hp": 30,
            "attack": 40,
            "defense": 14,
            "speed": 400,
            "height": 12,
            "weight": 4,
            "created": true
        },
        {
            "id": "2dd9d40e-86e9-406d-8f21-f98b6ed88fb9",
            "name": "ivysaur",
            "image": "img",
            "hp": 30,
            "attack": 40,
            "defense": 14,
            "speed": 400,
            "height": 12,
            "weight": 4,
            "created": true
        }
    ]
    return(
        <div className={style.container}>
            {pokemons.map(pokemon=>{
                return <Card
                        id={pokemon.id}
                        name={pokemon.name}
                        hp={pokemon.hp}
                        attack={pokemon.attack}
                        defense={pokemon.defense}
                        speed={pokemon.speed}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        />
            })}
        </div>
    )
}
export default CardsContainer;