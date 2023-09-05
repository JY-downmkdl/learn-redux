import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increase, decrease, setDiff} from '../modules/counter'
import Counter from './Counter';

//프리젠테이셔널 컴포넌트
//리덕스 스토어에 접근하지 ㅇ낳고 않고 시 필요한 값을 rp props 로
// 전달 받아 사용하는 컴포넌트
function CounterContainer(props){
    //number, diff
    // useSelector(state => state)
    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    //useDispatch() : 리덕스 스토어의 dispatch를
    // 함수에서 사용할 수 있게 해준다.
    const dispatch = useDispatch();

    // 각 액션 디스패치 하는 함수
    //increase() : 이게 뭐고;
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return (
        <Counter number={number} diff={diff} onIncrease={onIncrease}
         onDecrease={onDecrease} onSetDiff={onSetDiff}/>    
    );
};

export default CounterContainer;