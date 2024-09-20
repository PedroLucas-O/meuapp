function Carro (props) {
    
 return(
 <>
<h2>{props.carro.nome}</h2>
<ul>
    <li>Cor : {props.carro.cor}</li>
    <li>Ano : {props.carro.ano}</li>
    <li>Flex : {props.carro.flex?'Sim':'Não'}</li>
</ul>
 </>
 )
}

export default Carro