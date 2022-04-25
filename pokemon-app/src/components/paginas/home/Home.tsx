import {ReactComponent as PokemonLogoSVG} from "../../../assets/img/pokemon_logo.svg";
import './home.css';

export default function(){
    return(
    <div className="Home">
        <PokemonLogoSVG className="Home__pokemonLogo"/>
        <a href="/Game">
            <button className="Home_pokemonButton">START</button>                           
        </a>
    </div>
    );
}

