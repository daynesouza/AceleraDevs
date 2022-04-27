import { v4 as uuidv4 } from 'uuid';

import Icapturado from '../../../../types/capturado'

import {ReactComponent as IconePokemonCapturado} from "../../../../assets/img/pokemonCapturado.svg";
import {ReactComponent as IconePokemonVazio} from "../../../../assets/img/pokemonVazio.svg";
import {ReactComponent as IconeAbrirMenu} from "../../../../assets/img/abrirMenu.svg";

import './ListaItensMenuLateral.css'

interface Props{
    ArrayDeCapturados: Icapturado[] | any;
};

export function ListaItensMenuLateral ({ArrayDeCapturados} : Props){
    
    const listaCapturado = ArrayDeCapturados;
    const quantidadePokemons = listaCapturado.length;

    function verificarQuantidadeCapturada (pokemons : number){        

        if (pokemons < 6){
            if (pokemons < 5){
                for (let i = pokemons ; i < 6 ; i++){
                    listaCapturado.push({capturado: false, id: uuidv4()})
                }
            }
        }else{
            const pokemonsParaRemover = pokemons - 6;
            listaCapturado.splice(5,pokemonsParaRemover)
        }
        return listaCapturado;

    }    

    function verificarCapturado (pokemonCapturado:Icapturado){        
        
        if(pokemonCapturado.capturado){
            
           return <li key={pokemonCapturado.id}><IconePokemonCapturado className='MenuLateral__icone'/></li>
            
        }
        return <li key={pokemonCapturado.id}><IconePokemonVazio className='MenuLateral__icone'/></li>
    }
    
    return (
        <div className='MenuLateral'>
            <ul>                
                {   
                    verificarQuantidadeCapturada(quantidadePokemons).map ((pokemonVerificar: Icapturado) => (verificarCapturado(pokemonVerificar)))
                }   
                <li key={uuidv4()}><IconeAbrirMenu className='MenuLateral__icone'/></li>
            </ul>
        </div>
    )
}