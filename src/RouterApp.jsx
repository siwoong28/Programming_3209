import { BrowserRouter,Routes,Route,Link, useNavigate } from "react-router-dom";
import CounterApp from './CounterApp.jsx'
import TodoListApp from "./TodoListApp.jsx";

function LinkButtonpApp(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>App목록</h1>
            <ul>
                <li><Link to="counterapp">🔢CounterApp</Link></li>
                <li><Link to="todolistapp">✅TodoListApp</Link></li>
                <li><button
                    style={{width:'100px', height:'100px', fontSize:'1.1rem'}}
                    onClick={() => navigate("counterapp")}
                >🔢CounterApp</button></li>
                <li><button
                    style={{width:'100px', height:'100px', fontSize:'2rem'}}
                    onClick={() => navigate("/todolistapp")}
                >✅TodoListApp</button></li>
            </ul>
        </div>
    )
}

export default function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LinkButtonpApp />}></Route>
                <Route path="/counterapp" element={<CounterApp />}></Route>
                <Route path="/todolistapp" element={<TodoListApp />}></Route>
            </Routes>
        </BrowserRouter>
    )
}