import React, {useState} from "react";
import './App.css';
import { useAlert } from 'react-alert'
import {Link} from "react-router-dom";

function Elenco ({lista, setLista}){
    const [val, setInput] = useState("")
    const alert = useAlert();
    return(<div className="Lista">
        <form>
            <input type="text" value={val} onChange = { e => setInput( e.target.value) }/>
            <input type="button" value="Aggiungi" onClick={()=> {
                if (lista.filter(d=>d.nome===`${val}`).length===0) {
                    setLista([...lista, {nome: `${val}`}])
                    setInput("")
                } else {
                    if (`${val}`!=="") {
                        alert.show("Errore: Categoria già esistente")
                    } else {
                        alert.show("Errore: Nome categoria vuoto")
                    }
                }
            }
            }/>
        </form>
        {
            lista.filter(e=>e.nome!=="").map(d =>
                <div className="Elemento" key={d.nome}>
                    <div className="i"><Link to={{pathname:`/category/${d.nome}`}}>{d.nome}</Link></div>
                    <button className="i" onClick={()=> {
                        if(window.confirm("Sicuro di voler eliminare la voce?")) {
                            setLista(lista.filter(e => e.nome !== d.nome))
                        }
                    }}>X</button>
                </div>
            )}
    </div>)
}

export default Elenco;