//https://programming-3209.siwoong28.workers.dev/
import './todolist.css';
import Button  from './components/Button.jsx';
import Checkbox from './components/Checkbox.jsx';
import TodoItemEmpty from './components/TodoItemEmpty.jsx';

function TodoListApp() {
  return (
    <div className='todo'>

      <h1 className="todo__title">ToDo ToDo</h1>

      <form action="" className='todo__form'>
        <input type="text" className='todo__input' placeholder='할 일을 입력하세요.' />
        <Button type='submit' className='todo__button todo__button--add'>Add</Button>
      </form>

      <ul className='todo__list'>
        <TodoItemEmpty/>
        <li className='todo__item todo__item--complete'>
          <Checkbox type="checkbox" className='todo__check' id='chk-1'/>
          <Button className='todo__button todo__button--edit'>수정</Button>
          <Button className='todo__button todo__button--delete'>취소</Button>
        </li>
      </ul>
    </div>
  )
}

export default TodoListApp;
