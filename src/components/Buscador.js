import React, { useState } from 'react'

export const Buscador = ({listadoStage, setListadoStage}) => {

  const [busqueda, setBusqueda] = useState('')
  const [noEncontrado, setNoEncontrado] = useState(false)

  const buscarPeli = (e) => {
    setBusqueda(e.target.value)
    let pelis_encontradas = listadoStage.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
    })
    if(busqueda.length <= 1 || pelis_encontradas <= 0){
        pelis_encontradas = JSON.parse(localStorage.getItem('pelis'))
        setNoEncontrado(true)
    }else {
      setNoEncontrado(false)
    }
    setListadoStage(pelis_encontradas)
  }

  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        {(noEncontrado == true && busqueda.length > 1) && (
           <span className='no-encontrado'>No se han encontrado coincidencias</span>
        )}
        <form>
            <input type="text"
                   id='search_field'
                   name='busqueda'
                   autoComplete='off'
                   onChange={buscarPeli}
            />
            <button>Buscar</button>
        </form>
    </div>
  )
}
