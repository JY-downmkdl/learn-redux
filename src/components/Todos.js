import React, { useState } from 'react';

function TodoList({todos, onRemove, onToggle}){
    return(
        <ul>
            {todos.map(todo => (
            <li key={todo.id}>
                <span onClick={()=>onToggle(todo.id)}>{todo.text}</span>
                <button onClick={()=>onRemove(todo.id)}>삭제</button>
            </li>))}
        </ul>
    )
}

function Todos({todos, onCreate, onToggle, onRemove}) {
    //input에 들어갈 문자
    const [text, setText] = useState("");
    const onChange = e => setText(e.target.value);

    //인풋 초기화
    const onSubmit= e => {
        onCreate(text); 
        setText(""); 
    }

    return (
        <div>
            <div>
                <input type='text' value={text} onChange={onChange} />
                <button onClick={onSubmit}>등록</button>
            </div>
            <TodoList todos={todos}
            onToggle={onToggle}
            onRemove={onRemove}/>
        </div>
    );
};

export default Todos;