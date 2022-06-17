import './TodoList.css';

function TodoList(props){
    return(
        <section className="contenderTarea">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };