import style from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={style.card}>
            <p>Name:{props.name}</p>
            <p>HP: {props.hp}</p>
            <p>Attack: {props.attack}</p>
            <p>Defense: {props.defense}</p>
            <p>Speed: {props.speed} </p>
            <p>Height: {props.height} </p>
            <p>Weight:{props.weight}</p>
        </div>
    )
}
export default Card;