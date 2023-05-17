import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";



const CardsContainer = () => {

    const pokemons = useSelector(state=>state.pokemons);
   
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