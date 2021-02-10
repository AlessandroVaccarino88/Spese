import './App.css';
import Elenco from "./Elenco";
import React, {useState} from "react";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Categoria from "./Categoria";

const InitialState = [{nome: ""}]

function App() {
    const [lista, setLista] = useState(InitialState)
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <AlertProvider template={AlertTemplate}>
                        <div className="App">
                            <div>Logo</div>
                            <Elenco lista={lista} setLista={setLista}/>
                        </div>
                    </AlertProvider>
                </Route>
                <Route path="/category/:categoryname">
                    <Categoria/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;