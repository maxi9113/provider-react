import React , { useEffect } from 'react'
import ServicesTasks from '../../provider/services'
import List from './lists'
import Add from './add'
import {TasksContext} from '../../provider/index'

const Tasks = () => {
    const { updateData } = React.useContext(TasksContext);
    async function loadData() {
        updateData(true ,'LOAD');
        ServicesTasks.getTask().then((res) => {
            updateData(res, 'GET');
            updateData(false ,'LOAD');
        }).catch(reason => {
            updateData(true ,'ERROR');
        })
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <div >  
        <Add/>     
        <List />   
        </div>
    )
};


export default Tasks
