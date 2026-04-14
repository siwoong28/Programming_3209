import Button from "./Button";
import Checkbox from "./Checkbox";
export default function TodoItem(){
    return(
        <li className='todo__item todo__item--complete'>
            <Checkbox type="checkbox" className='todo__check' id='chk-1'/>
            <Button className='todo__button todo__button--edit'>수정</Button>
            <Button className='todo__button todo__button--delete'>취소</Button>
        </li>
    )
}