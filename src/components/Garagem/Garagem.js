import { useState } from "react"
import Carro from "../Carro/Carro"
import {Botao,GaragemConteiner,Estacionamento} from "./style"

function Garagem (props) {

    const [automovel , setAutomovel] = useState ({
        modelo: 'Uno',
        cor: 'Prata',
        ano: 2014,
        flex: true,
    })

    return(
        <GaragemConteiner>
        
        
        <Estacionamento>
        <Carro carro={props.carro1} automovel={automovel}/>
        {/* <Carro carro={props.carro2}/>
        <Carro carro={props.carro1}/>
        <Carro carro={props.carro2}/> */}
        </Estacionamento>
        </GaragemConteiner>
    )
}

export default Garagem