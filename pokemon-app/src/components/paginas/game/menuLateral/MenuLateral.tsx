import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Icapturado from '../../../../types/capturado'

import './ListaItensMenuLateral.tsx';
import { ListaItensMenuLateral } from './ListaItensMenuLateral';

export default function (){

    const [menuLateral, setMenuLateral] = useState([
        {capturado: true, id: uuidv4()},
        {capturado: true, id: uuidv4()},
        {capturado: true, id: uuidv4()},
        {capturado: false, id: uuidv4()},
        {capturado: false, id: uuidv4()},
        {capturado: false, id: uuidv4()},
        {capturado: false, id: uuidv4()},
        {capturado: false, id: uuidv4()},
    ]);

   

    
    return (
        <ListaItensMenuLateral ArrayDeCapturados={menuLateral}/>
    );
}