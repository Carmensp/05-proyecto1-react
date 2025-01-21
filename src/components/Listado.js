import React, { useEffect, useState } from 'react'
import { Editar } from './Editar'

export const Listado = ({listadoStage, setListadoStage}) => {

    // const [ listadoStage, setListadoStage ] = useState([])
    const [editar, setEditar] = useState(0)
    useEffect(() => {
        conseguirPeliculas()
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        setListadoStage(peliculas)
        return peliculas
    }

    const borrarPeli = (id) => {
        let pelis_almacenadas = conseguirPeliculas()
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))
        setListadoStage(nuevo_array_peliculas)
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas))
    }

  return (
    <>
        {listadoStage != null ?
         listadoStage.map(peli => {
            return(
                <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>
                    <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                    <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                    {editar === peli.id &&(
                        <Editar peli={peli} 
                                conseguirPeliculas={conseguirPeliculas} 
                                setEditar={setEditar}
                                setListadoStage={setListadoStage}/>
                    )}
                </article>
            )
        }) : <h2>No hay películas para mostrar</h2>}
    </>
  )
}
