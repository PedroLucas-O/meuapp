import {ConteinerHeader} from './style'

function Header (props) {

    const mudaNome = () => {
        props.setNome ('Casa')
    }

    return(
        <ConteinerHeader>
        <h1>Garagem de {props.nome}</h1>
        <button onClick={mudaNome}>Mudar o Nome</button>
        </ConteinerHeader>
    )
}

export default Header