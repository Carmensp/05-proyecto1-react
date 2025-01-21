import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

    const [ listadoStage, setListadoStage ] = useState([])

  return (
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Películas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>
        <section className="content">
            <Listado listadoStage={listadoStage} setListadoStage={setListadoStage}/>
        </section>
        <aside className="lateral">
            <Buscador/>
            <Crear setListadoStage={setListadoStage}/>
        </aside>
        <footer className="footer">
            &copy; Máster en React - <a href="https://github.com/Carmensp">GitHub - Carmensp</a>
        </footer>
    </div>
  );
}

export default App;
