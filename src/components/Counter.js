import React from 'react';

//프리젠테이셔널 컴포넌트
//리덕스 스토어에 접근하지 ㅇ낳고 않고 시 필요한 값을 rp props 로
// 전달 받아 사용하는 컴포넌트
function Counter({number, diff, onIncrease, onDecrease, onSetDiff}){
    const onChange = e =>{
        onSetDiff(Number(e.target.value));
    }
    return (
        <div>
            <h2>{number}</h2>
            <div>
                <input type='number' value={diff} min="1" onChange={onChange}/>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;