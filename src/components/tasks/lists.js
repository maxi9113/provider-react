import React from 'react'
import {TasksContext} from '../../provider/index'

 const List = () => {
    const { list_task,updateData} = React.useContext(TasksContext);    
    function deleteTask(task) {        
        updateData(true, 'LOAD');  
        updateData(task, 'DELETE');        
        
    }
  
    return (
        <TasksContext.Consumer> 
        {({list_task})=>(            
                <div >
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        !list_task.loading ?
                        list_task.map(function (row,index) {
                            return (
                                <tr>
                                <td>{row.title}</td>
                                <td>{row.body}</td>
                                <td>{row.body}</td>
                                <td><button type="button"  onClick={()=>deleteTask(row)} className="btn btn-outline-danger">Eliminar</button></td>
                                </tr>
                            )
                            }):
                            <div className="spinner-border m-5" role="status">
                            <span className="sr-only">Loading...</span>
                            </div>
                        } 

                    </tbody>
                </table>
            </div>
        )} 
        </TasksContext.Consumer>

        
    )
};


export default List
