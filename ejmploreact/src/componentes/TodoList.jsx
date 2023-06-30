import React, { Fragment, useEffect, useRef, useState } from "react"
import { TodoItem } from "./TodoItem";

const KEY="TodoList-todos";

export function TodoList(){
    const [todos,sertodos,]=useState(
        
        JSON.parse(localStorage.getItem(KEY))?JSON.parse(localStorage.getItem(KEY)):[]            
    )
}

const taskRef=useRef();

useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(todos));
    },[todos]);

const agregarTarea=()=>{
    const task=taskRef.current.value;
    const id=uuid();
    if(task=='')return;
    setTodos((prevTodos)=>{
        const newTask = {
            id:id,
            task:task,
            complete:false
        }
        return[...prevTodos,newTask]

    });
    taskRef.current.value="";




}

export function TodoList(){
    return(
        <>
            <h1>lista de tareas</h1>
            <div className="input-group mb-3 at-4">
                <input ref={taskRef} placeholder="Ingrese una tarea" className="form-control" type="text" name="" id="" >                    
                </input>
                <button onClick={agregarTare} className="btn-success ms-2"><i className="bi bi-plus-circle-fill">
                    </i></button>
                <button onClick={eliminarTareCompletadas} className="btn btn-danger ms-2"><i className="bi bi-trash">
                    </i></button>
            </div>
            <ul class="list-group">
                <TodoItem></TodoItem>
            </ul>
        </>
    )
}