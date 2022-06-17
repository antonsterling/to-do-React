import './TodoSearch.css'
import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {

    const onSearchValueChage = (event) => {
        setSearchValue(event.target.value);
    }
    return (
        <>
            <div className='contenedorBuscar buscar'>
                <input
                    className="campoBusqueda"
                    placeholder="Search Task"
                    onChange={onSearchValueChage}
                    value={searchValue}
                />
                <button className='botonBuscar'> </button>
            </div>
        </>
    );
}

export { TodoSearch };