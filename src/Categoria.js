import {Link, useParams} from "react-router-dom"
import React, {useState} from "react";
import Spese from "./Spese";
import AlertTemplate from "react-alert-template-basic";
import {Provider as AlertProvider} from "react-alert";
export const initialState = [{nomeC: "", spesa: "", data: "", descrizione: "", importo: 0.0}]

function Categoria({list, setList}){
    let {categoryname} = useParams();
    const [lista, setLista] = useState(initialState)
    return(
        <AlertProvider template={AlertTemplate}>
            <div className="Lista">
                <Link to="/">HomePage</Link>
                <h1>{categoryname}</h1>
                <Spese lista={lista} setLista={setLista}/>
            </div>
        </AlertProvider>
    )
}
export default Categoria