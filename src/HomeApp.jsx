import { useState } from "react";
import CounterApp from './CounterApp.jsx';
import TodoListApp from "./TodoListApp.jsx";

function ButtonPageApp({setPage}){
    return(
        <>
            <h1>App목록</h1>
            <ul>
                <li><button onClick={() => setPage('counterapp')} style={{fontSize:"1.1rem",width:"100px", height:"100px"}}>🔢<br/>Counterapp</button></li>
                <li><button onClick={() => setPage('todolistapp')} style={{fontSize:"1.1rem",width:"100px", height:"100px"}}>✅<br/>TodoListApp</button></li>
            </ul>
        </>
    )
}

export default function HomeApp(){
    const [page,setPage] = useState('home')
    return(
        <>
            {/* page가 home이면 <ButtonPageApp /> */}
            {page === 'home' && <ButtonPageApp setPage={setPage} />}
            {/* page가 home이 아니면, home으로 가는 버튼 만들자 */}
            {page !== 'home' &&
                <button onClick={() => setPage('home')} style={{
                    position:'fixed',
                    left:'10px',
                    bottom:'10px',
                    cursor:'pointer',
                    borderRadius:'8px',
                    backgroundColor:'#eee',
                    border:'none',
                    padding:'6px'
                }}>🏚️home</button>
            }
            
            {/* page가 counterapp이면 <CounterApp /> */}
            {page === 'counterapp' && <CounterApp />}
            {/* page가  todolistapp이면 <TodoListApp /> */}
            {page ==='todolistapp' && <TodoListApp />}
        </>
    )
}