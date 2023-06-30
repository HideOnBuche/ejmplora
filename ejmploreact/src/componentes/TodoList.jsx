import React, { Fragment, useEffect, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import {v4 as uuid} from "uuid";

const KEY="TodoList-todos";

export function TodoList(){
    const [todos,setTodos,]=useState(
        
        JSON.parse(localStorage.getItem(KEY))?JSON.parse(localStorage.getItem(KEY)):[]            
    )

    const taskRef=useRef();

useEffect(()=>{
    localStorage.setItem(KEY,JSON.stringify(todos));
    },[todos]);//cuando cambia el "todos" lo guarda en el locaStorage

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

const ResumenTareas=()=>{
    const cantidad=cantidadTareas();
    if(cantidad>1){
        return (<dic className="alert alert-info mt-3">te quedan {cantidad} tareas pendientes!
        </dic>)
    }else if(cantidad===1){
        return(<div className="alert alert-info mt-3">te queda {cantidad} tareas pendientes!
        </div>);
    }else{
        return(<div className="alert alert-info mt-3">no re quedan tareas pendientes!
        </div>);
    }
}

const cantidadTareas=()=>{
    return todos.fiter((todo)=>!todo.complete).length;
}

const cambiarEstadoTarea=(id)=>{

    const newTodos=[...todos];
    const todo=newTodos.find((todo)=>todo.id===id);
    todo.complete=!todo.complete;
    setTodos(newTodos);
}

const eliminarTareCompletadas=()=>{
    const newTodos=todos.filter((todo)=>!todo.complete);
    setTodos(newTodos);
}
}




export function TodoList(){
    return(
        <>
            <h1>lista de tareas</h1>
            <div className="input-group mb-3 at-4">
                <input ref={taskRef} placeholder="Ingrese una tarea" className="form-control" type="text" name="" id="" >                    
                </input>
                <button onClick={agregarTarea} className="btn-success ms-2"><i className="bi bi-plus-circle-fill">
                    </i></button>
                <button onClick={eliminarTareCompletadas} className="btn btn-danger ms-2"><i className="bi bi-trash">
                    </i></button>
            </div>
            <ul class="list-group">
                {todos.map((todo)=><TodoItem todo={todo} key={todo.id} cambiarEstado={cambiarEstadoTarea} ></TodoItem>)}
            </ul>
        </>
    )
}