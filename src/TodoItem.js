import './TodoItem.css'

function TodoItem(props) {

    return (
        <li className="contenedorTareas">
            <span
                className='iconoFinalizar icono'
                onClick={props.onComplete}
            ></span>
            <p className={`tareas ${props.completed && 'completed'}`}>
                {props.text}
            </p>
            <span
                className='iconoEliminar icono'
                onClick={props.onDelete}
            ></span>
        </li>
    );
}

export { TodoItem };