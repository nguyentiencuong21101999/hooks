import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
};
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null
}

function TodoList(props) {
    const { todos, onTodoClick } = props;
    const handleClick = (element) => {
        if (onTodoClick) {
            onTodoClick(element)
        }
    }

    return (
        <div>
            <ul className="todolist">
                {
                    todos.map(element => (
                        <li onClick={() => { handleClick(element) }} key={element.id}>{element.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;