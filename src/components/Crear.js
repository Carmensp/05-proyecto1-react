import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage'

export const Crear = ({setListadoStage}) => {

  const tituloComponente = "Añadir película"
  const [ peliState, setPeliState ] = useState({
    titulo: '',
    descripcion: ''
  })
  const {titulo, descripcion} = peliState

  const conseguirDatosForm = e => {
    e.preventDefault()
    
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    setPeliState(peli)
    setListadoStage(elementos => {
      return[...elementos, peli]
    })
    GuardarEnStorage("pelis", peli)
  }

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>{(titulo && descripcion) && "Has creado la película: " + titulo}</strong>
        <form onSubmit={conseguirDatosForm}>
            <input type="text" id='titulo' name='titulo' placeholder="Titulo"/>
            <textarea id='descripcion' name='descripcion' placeholder="Descripción"></textarea>
            <input type="submit" value="Guardar"/>
        </form>
    </div>
  )
}
