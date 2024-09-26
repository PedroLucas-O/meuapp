import Carro from "../Carro/Carro"
import {Botao,GaragemConteiner,Estacionamento} from "./style"

function Garagem (props) {

    return(
        <GaragemConteiner>
        
        
        <Estacionamento>
        <Carro carro={props.carro1}/>
        <Carro carro={props.carro2}/>
        <Carro carro={props.carro1}/>
        <Carro carro={props.carro2}/>
        </Estacionamento>
        </GaragemConteiner>
    )
}

export default Garagem