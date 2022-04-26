import { v4 as uuidv4 } from 'uuid';
import Icapturado from '../../../../types/capturado'

interface Props{
    capturado: Icapturado[];
}

export default function ArrayItemMenu ({capturado}: Props){
    return (
        <p>Item menu lateral</p>
    );
}