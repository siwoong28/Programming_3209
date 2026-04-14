//https://programming-3209.siwoong28.workers.dev/
import './todolist.css';
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoList from './components/TodoList.jsx';

function TodoListApp() {
  return (
    <div className='todo'>
      <TodoHeader />
      <TodoAdder />
      <TodoList />
    </div>
  )
}

export default TodoListApp;