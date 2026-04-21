import Button from "./Button";
import Checkbox from "./Checkbox";
export default function TodoItem({todo}){
    return(
        // todo.isCompleted가 true면 " todo__item--complete",false "" 
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            <Checkbox id={todo.id}>{todo.text}</Checkbox>
            <Button className='todo__button todo__button--edit'>수정</Button>
            <Button className='todo__button todo__button--delete'>취소</Button>
        </li>
    )
}