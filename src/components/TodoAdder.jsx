import { useState } from 'react';
import Button from './Button.jsx'

export default function TodoAdder({ addTodo }) { //    const { addTodo } = props;

    const [inputTodo, setInputTodo] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault(); //기본 동작 막자
        if(!inputTodo.trim()) return; //빈칸이면 바로 return
        addTodo(inputTodo.trim()); //input에 있는 text value를 할일 내용으로 추가하자
        setInputTodo('');
    }
    return (
        <form action="" className='todo__form' onSubmit={handleSubmit}>
            <input
                type="text"
                className='todo__input'
                placeholder='할 일을 입력하세요.'
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type='submit' className='todo__button todo__button--add'>Add</Button>
        </form>
    )
}