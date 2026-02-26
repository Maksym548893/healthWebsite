import { useMemo, useState } from "react";

function AdvancedTodoList() {
const [todo, setTodo] = useState([
  { id: 1, title: "Learn React", priority: "high", status: "todo", dueDate: "2026-02-27" },
  { id: 2, title: "Write blog post", priority: "medium", status: "in-progress", dueDate: "2026-02-28" },
  { id: 3, title: "Buy groceries", priority: "low", status: "done", dueDate: "2026-02-25" },
])

const [input, setInput] = useState('')
const [search, setSearch] = useState('')
const [priority, setPriority] = useState('all')
const [status, setStatus] = useState('all')

const AddTask = () => {
    if(input.trim() === '') return

    const NewTask = {
        id: Date.now(),
        title: input,
        priority: 'high',
        status: 'done',
        dueDate: '2026-02-25'
    }

    setTodo(prev => [...prev, NewTask])
    setInput('')
}

const DeleteTask = (id) => {
    setTodo((prev) => prev.filter((trik) =>
    trik.id !== id
    ))
}

const FilterEverything = useMemo(() => {
    return todo.filter(tede => {
        const matchTitle = tede.title.toLowerCase().includes(search.toLowerCase())
        const matchStatus = status === 'all' || tede.status === status
        const matchPriority = priority === 'all' || tede.priority === priority

        return matchTitle && matchStatus && matchPriority
    }
    )
}, [search, priority, status, todo])

return(
    <div className="AdvancedTodoList">
        <div className="searching">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>

            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">high</option>
            </select>

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="todo">Todo</option>
                <option value="in-progress">In-progress</option>
                <option value="done">Done</option>
            </select>
        </div>

        <div className="adding">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={AddTask}>AddTask</button>
        </div>

        <ul>
        {FilterEverything.map(fitter => 
            <li style={{color: 'red'}} key={fitter.id}>{fitter.title} - {fitter.priority} / {fitter.status} - {fitter.dueDate}  <button onClick={() => DeleteTask(fitter.id)}>Delete</button></li>
        )}
        </ul>
    </div>
)
}

export default AdvancedTodoList