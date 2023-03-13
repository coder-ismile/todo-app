import React from 'react'
import {FaRegCheckCircle} from 'react-icons/fa'
import {BiEdit} from 'react-icons/bi'
import {VscTrash} from 'react-icons/vsc'
const TodoList = ({todos, setTodos,setEditTodo}) => {
    const handleComplete=(todo)=>{
        setTodos(
              todos.map((item)=>{
                if(item.id === todo.id){
                    return {...item, completed : !item.completed};
                }
                return item;
              })
        )
    }
    const handleEdit=({id})=>{
         const findTodo = todos.find((todo) => todo.id === id);
         setEditTodo(findTodo);
    }
    const handleDelete =({ id })=>{
        setTodos(todos.filter((todo) => todo.id != id))
    }
  return (
    <div>
        {todos.map((todo)=>(
                <li className="list-item" key={todo.id}>
                      <input type="text" 
                         value={todo.title}
                         className={`list ${todo.completed ? "complete" : " "}`}
                         onChange={(event)=>event.preventDefault()}
                      />
                      <div>
                        <button className="button-complete task-button">
                             <FaRegCheckCircle onClick={()=>handleComplete(todo)}/>
                        </button>
                        <button className="button-edit task-button">
                                  <BiEdit  onClick={()=>handleEdit(todo)}/>
                        </button>
                        <button className="button-delete task-button">
                                 <VscTrash  onClick={()=>handleDelete(todo)} />
                        </button>
                      </div>
                </li>
            ))
        }
    </div>
  )
}

export default TodoList
