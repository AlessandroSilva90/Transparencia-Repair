import { useState, useEffect } from "react";
import { getDetailsContas } from "../../services/api";

const DetailItensCard = (props) => {

    const [dados, setDados] = useState(['']);
    // setDados(props.props);

    useEffect(()=> {
        async function load(){
            const response = await getDetailsContas(props.props)
            setDados(response);
        }load()
    },[]);

    const returnAllItens = () =>{
        if(dados == null){
            return(
            <ul>
                <li>Não há itens</li>
            </ul>
            )
        }else{
        return(
            dados.map((i, index)=> (
            <ul key={index}>
                <li> <label>Produto:</label> {i['DS_PRODUTO']}</li>
                <li><label>Quantidade:</label> {i['QT_ENTRADA']}</li>
                <li><label>Valor:</label> R$ {i['VL_TOTAL']}</li>
            </ul>
            ))
            )
        }
        }

    return (  
        <>
            {returnAllItens()}
            {/* {console.log(dados)} */}
        </>
     );
}
 
export default DetailItensCard;