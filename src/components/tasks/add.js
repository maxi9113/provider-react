import React, { useState } from 'react';
import {TasksContext} from '../../provider/index'


const Add = () => {
    const { list_task,updateData} = React.useContext(TasksContext);  
    const [task, setTask] = useState({
        title: '',
        body: '',
        completed:false
    })

    const handleInputChange = (event) => {
        setTask({
            ...task,
            [event.target.name] : event.target.value
        })
    }
    function addTask() {  
        updateData(task, 'ADD');
    }
    return (
        <div >
            <form>
             <div className="form-group">
             <label for="exampleInputEmail1">Title</label>
             <input type="text" className="form-control" onChange={handleInputChange} name="title"></input>             
            </div>  
            <div className="form-group">
             <label for="exampleInputEmail1">Body</label>
             <input type="text" className="form-control" onChange={handleInputChange} name="body"></input>             
            </div> 
            <button type="button" onClick={addTask} className="btn btn-primary">Agregar</button>
           </form>
        </div>
    )
};


export default Add
