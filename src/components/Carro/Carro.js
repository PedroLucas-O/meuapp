import carro from '../Carro/img/classic.jpg';
import {Container} from './style'

function Carro (props) {
    
 return(
 <Container>

<ul>
    <h2>{props.automovel.modelo}</h2>
    <img src={carro}/>
    <li>Cor : {props.automovel.cor}</li>
    <li>Ano : {props.automovel.ano}</li>
    <li>Flex : {props.automovel.flex?'Sim':'Não'}</li>
</ul>
 </Container>
 )
}

export default Carro