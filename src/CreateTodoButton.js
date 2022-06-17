import React from 'react';
import './createTodoButton.css';

function CreateTodoButton({onAdd}) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    };

    const addTodo = (event) => {
        onAdd(newTodoValue);
        
    }

    return (
        <>
            <h2 className="tituloTarea">Create New Task</h2>
            <h3 className="subTitulo">New Task</h3>
            <input 
                className="campoBusqueda"
                placeholder="Name of new task"
                value={newTodoValue}
                onChange={onChange}/>
            <button 
                className='botonAñadir'
                onClick={addTodo}

                >add task</button>
            <span className='imagen'></span>
        </>
    );
}

export { CreateTodoButton };