import React, { useEffect, useRef } from "react";
import { Todoitem } from "./Todoitem";
import {v4 as uuid} from 'uuid';

const KEY="todolist-todos";

export function Todolist(){
    const [todos, setTodos]=useState(
        /*[
            {id:1,task:"Tarea 1",complete:true},
            {id:1,task:"Tarea 1",complete:false}
        ]*/
        JSON.parse(localStorage.getItem(KEY))?JSON.parse(localStorage.getItem(KEY)):[]
    );
    
    const taskRef=useRef();
    
    useEffect(()=>{
        localStorage.setItem(KEY,JSON.stringify(todos));
        },[todos]);
    
    const agregarTarea=()=>{
        //console.log("agregando tarea");
        const task=taskRef.current.value;
        const id=uuid();
        if(task==='')return;
        setTodos((prevTodos)=>{
            const newTask = {
                id: id,
                task: task,
                complete:false
            }
            return [...prevTodos, newTask]
        });
        taskRef.current.value="";
    }

    const ResumenTareas=()=>{
        const cantidad=cantidadTareas();
        if(cantidad>1){
            
        }
    }



  
  
  
    
    <>
        <h1>Listado de tareas</h1>
        <div className="input-group mb-3 mt-4">
            <input ref={taskRef} placeholder="Ingrese una tarea" className="form-control" type="text" name="" id=""> 
            </input>
            <button onClick={agregarTarea} className="btn btn-success ms-2"><i className="bi bi-plus-circle-fill">
                </i></button>
            <button onClick={eliminarTareasCompletadas} className="btn btn-danger ms-2"><i className="bi bi-trash">
                </i></button>
        </div>

        <ul className='list-group'>
            <Todoitem/>
        </ul>
    </>
}

