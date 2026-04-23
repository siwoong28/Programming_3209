//https://programming-3209.siwoong28.workers.dev/
import { useState } from 'react';
import './todolist.css';
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoList from './components/TodoList.jsx';

class Todo {
  constructor(id, text, isCompleted) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;
  }
}

function TodoListApp() {
  const [todos, setTodos] = useState([]);
  function addTodo(text){
    //이전 todos에 newTodo 만들어서 추가하자 -> 그것을 setTodos()하자
    setTodos((todos) => [
      ...todos,     //todos에 있는 item을 다 꺼내서 새로운 리스트에 하니씩 넣자
      new Todo(
        Date.now(), //id : 고유 ID 시간을 이용. ==new Date().getTime()
        text,       //text : 할 일 내용
        false       //isCompleted : 할 일의 완료 여부. 초기값은 false
      )
    ])
  }
  function toggleTodo(id){
    setTodos((todos) =>
      //todos에서 하나씩 꺼내서, todo, 꺼낸 todo의 id와 id가 같다면, 
      //새 객체 만들어서 todo값 복사, 속성 수정
      todos.map((todo) => 
        todo.id === id ? {...todo,isCompleted: !todo.isCompleted} : todo
      )
    )
  }
  function deleteTodo(id){
    setTodos((todos) =>
      //todos를 하나씩 꺼내요 todo, 
      todos.filter((todo) => todo.id !==id)
    )
  }
  return (
    <div className='todo'>
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo = {toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default TodoListApp;