import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "./Todos";
import { addTodo, deleteTodo, toggleTodo } from "../modules/todos";
function TodosContainer(){
    const todos = useSelector(state=>state.todos);
    const dispatch =useDispatch();
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    const onRemove = id => dispatch(deleteTodo(id));
    return(
        <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} onRemove={onRemove}/>
    )
}
export default TodosContainer;
