import './game.css'
import Background from './background/Background';

export default function Game (){
    const teste=() => {
        return console.log ("dentro");
    }
    return(
       <div className="Game__tela">
           <Background/>
       </div>
    )
} 