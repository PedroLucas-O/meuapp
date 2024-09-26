import carro from '../Carro/img/classic.jpg';
import {Container} from './style'

function Carro (props) {
    
 return(
 <Container>

<ul>
    <h2>{props.carro.nome}</h2>
    <img src={carro}/>
    <li>Cor : {props.carro.cor}</li>
    <li>Ano : {props.carro.ano}</li>
    <li>Flex : {props.carro.flex?'Sim':'Não'}</li>
</ul>
 </Container>
 )
}

export default Carro