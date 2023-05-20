import CardsContainer from "../../components/CardsConteinter/CardsConteiner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";




const Home = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons())
    }, [dispatch])
    return(
        <>
            <h1>La vista Home</h1>
            <CardsContainer/>
        </>
    );
};

export default Home;