import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
        <>
            <h2 className="tituloContador"> Your Task</h2>
            <h3 className="subtituloContador"> Completed {completed} to {total} </h3>
        </>
    )
}

export { TodoCounter };