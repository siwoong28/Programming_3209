function TodoListApp(){
  return (
    <>
      <form action="">
        <h1>ToDo ToDo</h1>
          <input type="text" />
          <button>Add</button>
        <ul>
          <li>
            <input type="checkbox"/>
            <label htmlFor="">옷싸기</label>
            <button>수정</button>
            <button>취소</button>
          </li>
          <li>
            <input type="checkbox"/>
            <label htmlFor="">잠자기</label>
            <button>수정</button>
            <button>취소</button>
          </li>
        </ul>
      </form>
    </>
  )
}

export default TodoListApp