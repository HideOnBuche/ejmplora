import React from "react";
export function TodoItem({todo,cambiarEstado}){
    const {id,task,complete}=todo

    const fnCambiarEstado=()=>{
        cambiarEstado(id);
    }
    return (
        <>
            <li className="form-ckeck-input me-2">
            <input className="form-ckeck-input me-2" onChange={fnCambiarEstado} checked={complete} type="checkbox" >
            </input>
            {task}
            </li>
        </>
    );
}

