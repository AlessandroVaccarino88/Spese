
import React, {useState} from "react";
import './App.css';
import { useAlert } from 'react-alert'
import moment from "moment";

function Spese ({lista, setLista}){
    const [stato, setStato] = useState({descrizione: "", importo: 0.0})
    const [nomeSpesa, setNomeSpesa] = useState("");
    const [startDate, setStartDate] = useState(new Date("1999-08-08"));
    const alert = useAlert()
    return(<div>
        {console.log(lista)}
        <form className="Lista">
            <label className="i"> Nome Spesa:
                <input type="text" value={nomeSpesa}
                       onChange={ d => setNomeSpesa(d.target.value)}/>
            </label>
            <label className="i"> Importo:
                <input type="text" value={stato.importo}
                       onChange = { d => {
                           if (!Number.isNaN(Number.parseFloat(d.target.value))) {
                               setStato({...stato, importo: Number.parseFloat(d.target.value)})
                           }
                       }
                       }/>
            </label>
            <label className="i"> Descrizione:
                <input type="text" value={stato.descrizione}
                       onChange = { d => setStato({...stato, descrizione: d.target.value})}/>
            </label>
            <label className="i"> Data:
                <input type="date" value={startDate}
                       onChange = { d => setStartDate(d.target.value)}/>
            </label>
            <input type="button" value="Aggiungi Spesa" className="i" onClick={()=> {
                if (lista.filter(d=>d.spesa===`${nomeSpesa}`).length===0) {
                    if (`${startDate}`<=moment().format("YYYY-MM-DD"))
                    {
                        if(stato.descrizione!==""){
                            if(parseFloat(stato.importo)!==0){
                                setLista([...lista, {
                                    spesa: nomeSpesa,
                                    data: startDate, descrizione: stato.descrizione,
                                    importo: stato.importo
                                }])
                                console.log(lista)
                                setStato({descrizione: "", importo: 0.0})
                                setStartDate(new Date("1999-08-08"))
                                setNomeSpesa("")
                            } else {
                                alert.show("Errore: IMPORTO")
                            }
                        } else {
                            alert.show("Errore: DESCRIZIONE")
                        }
                    } else {
                        alert.show("Errore: DATA")
                    }
                } else {
                    if (`${nomeSpesa}`!=="") {
                        alert.show("Errore: CHECAZZOFAICOGLIONE")
                    } else {
                        alert.show("Errore: Nome Spesa vuoto")
                    }
                }
            }
            }/>
        </form>
        <div className="Elemento" key="Header">
            <div className="i">Nome Spesa</div>
            <div className="i">Data Spesa</div>
            <div className="i">Descrizione</div>
            <div className="i">Importo</div>
            <div className="i">Opzioni</div>
        </div>
        {
            lista.filter(e=>e.spesa!=="").map(d =>
                <div className="Elemento" key={d.spesa}>
                    <div className="i">{d.spesa}</div>
                    <div className="i">{d.data}</div>
                    <div className="i">{d.descrizione}</div>
                    <div className="i">{d.importo}</div>
                    <button style={{flex:0.5}} onClick={()=>{
                        if(window.confirm("Sicuro di voler eliminare la voce?"))
                            setLista(lista.filter(e => e.spesa !== d.spesa))
                    }}>Elimina</button>
                </div>
            )}
    </div>)
}

export default Spese