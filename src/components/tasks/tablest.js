import React from 'react';
import MaterialTable from 'material-table';
import {TasksContext} from '../../provider/index'
import {
    CircularProgress
  } from '@material-ui/core';

export default function MaterialTableDemo() {
  
  const {updateData} = React.useContext(TasksContext);    
  const [state, setState] = React.useState({
    columns: [
      { title: 'Template', field: 'template' },
      { title: 'Conducted by', field: 'conducted_by' },
      { title: 'Conducted on', field: 'conducted_on' },
      { title: 'Completed on', field: 'completed_on' }
    ]
    });

  return (
    <TasksContext.Consumer> 
    {({tasks,loading,index,previousState})=>( 
        tasks.length>0? 
            <MaterialTable
            title="Editable Example"
            columns={state.columns}
            data={tasks.map(row => ({ ...row }))}
            editable={{
                onRowAdd: (newData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    updateData(newData, 'ADD');              
                    }, 600);
                }),
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    debugger
                    if (oldData) {
                        updateData(oldData.tableData.id, 'INDEX')
                        updateData(newData,"UPDATE")
                    
                    }
                    }, 600);
                }),
                onRowDelete: (oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    updateData(oldData.tableData.id, 'DELETE');   
                    }, 600);
                }),
            }}
            />:
            <CircularProgress />            
        )} 
    </TasksContext.Consumer>
  );
}