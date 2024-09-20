import Carro from "./Carro"

function Garagem (props) {

    return(
        <>
        <Carro carro={props.carro1}/>
        <Carro carro={props.carro2}/>
        </>
    )
}

export default Garagem