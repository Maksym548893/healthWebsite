import { da } from "@faker-js/faker";
import { useMemo, useState } from "react";

import './advancedSearchField.css'

function AdvancedSearchField() {

    const tasks = [
  {
    id: 1,
    title: "Finish dashboard UI",
    priority: "high",
    status: "in-progress",
    category: "work",
    dueDate: "2026-02-26"
  },
  {
    id: 2,
    title: "Buy groceries",
    priority: "medium",
    status: "todo",
    category: "personal",
    dueDate: "2026-02-24"
  },
  {
    id: 3,
    title: "Study React performance",
    priority: "high",
    status: "todo",
    category: "study",
    dueDate: "2026-02-28"
  },
  {
    id: 4,
    title: "Fix login bug",
    priority: "high",
    status: "done",
    category: "work",
    dueDate: "2026-02-20"
  },
  {
    id: 5,
    title: "Go to the gym",
    priority: "low",
    status: "todo",
    category: "personal",
    dueDate: "2026-02-25"
  },
  {
    id: 6,
    title: "Prepare presentation slides",
    priority: "medium",
    status: "in-progress",
    category: "work",
    dueDate: "2026-03-01"
  },
  {
    id: 7,
    title: "Read JavaScript book",
    priority: "low",
    status: "todo",
    category: "study",
    dueDate: "2026-03-05"
  },
  {
    id: 8,
    title: "Update portfolio website",
    priority: "medium",
    status: "in-progress",
    category: "work",
    dueDate: "2026-02-27"
  },
  {
    id: 9,
    title: "Doctor appointment",
    priority: "high",
    status: "todo",
    category: "personal",
    dueDate: "2026-02-24"
  },
  {
    id: 10,
    title: "Refactor old component",
    priority: "medium",
    status: "done",
    category: "work",
    dueDate: "2026-02-18"
  },
  {
    id: 11,
    title: "Watch React conference",
    priority: "low",
    status: "done",
    category: "study",
    dueDate: "2026-02-15"
  },
  {
    id: 12,
    title: "Team meeting",
    priority: "high",
    status: "in-progress",
    category: "work",
    dueDate: "2026-02-25"
  },
  {
    id: 13,
    title: "Clean apartment",
    priority: "low",
    status: "todo",
    category: "personal",
    dueDate: "2026-02-23"
  },
  {
    id: 14,
    title: "Practice algorithms",
    priority: "high",
    status: "todo",
    category: "study",
    dueDate: "2026-03-02"
  },
  {
    id: 15,
    title: "Deploy new version",
    priority: "high",
    status: "in-progress",
    category: "work",
    dueDate: "2026-02-29"
  },
  {
    id: 16,
    title: "Plan weekend trip",
    priority: "medium",
    status: "todo",
    category: "personal",
    dueDate: "2026-03-03"
  },
  {
    id: 17,
    title: "Write blog post about React",
    priority: "medium",
    status: "done",
    category: "study",
    dueDate: "2026-02-19"
  },
  {
    id: 18,
    title: "Optimize API calls",
    priority: "high",
    status: "in-progress",
    category: "work",
    dueDate: "2026-02-27"
  },
  {
    id: 19,
    title: "Meditation session",
    priority: "low",
    status: "done",
    category: "personal",
    dueDate: "2026-02-21"
  },
  {
    id: 20,
    title: "Learn TypeScript basics",
    priority: "medium",
    status: "todo",
    category: "study",
    dueDate: "2026-03-04"
  }
  ];

  const [search, setSearch] = useState('')
  const [priority, setPriority] = useState('all')
  const [status, setStatus] = useState('all')
  const [category, setCategory] = useState('all')

  const FiltredAll = useMemo(() => {
    return tasks.filter(task => {
        const matchSearch = task.title.toLowerCase().includes(search.toLowerCase())
        const matchPriority = priority === 'all' || task.priority === priority
        const matchStatus = status === 'all' || task.status === status
        const matchCategory = category === 'all' || task.category === category

        return matchSearch && matchPriority && matchStatus && matchCategory
    })

  }, [search, priority, status, category, tasks])

  return(
    <div className="AdvancedSearchField">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>

    <select name="" value={priority} onChange={(e) => setPriority(e.target.value)} id="">
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>

    <select name="" value={status} onChange={(e) => setStatus(e.target.value)} id="">
        <option value="all">All</option>
        <option value="in-progress">In-progress</option>
        <option value="todo">Todo</option>
        <option value="done">Done</option>
    </select>

    <select name="" value={category} onChange={(e) => setCategory(e.target.value)} id="">
        <option value="all">All</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="study">Study</option>
    </select>

    <ul>
        {FiltredAll.map(filt => 
            <li key={filt.id}>{filt.title}({filt.dueDate}): {filt.status}, {filt.category} {filt.priority}</li>
        )}
    </ul>
    </div>
  )
}


export default AdvancedSearchField