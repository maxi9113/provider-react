import React from "react";
export const TasksContext = React.createContext();

const initialState = {
    loading: true,
    error : false,
    tasks: []
};
function reducer(state, action) {     
       
    switch (action.type) {
        case 'LOAD':
            return {
                ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
                loading: action.data
            }
        case 'ERROR':
            return {
                ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
                error: action.data
            }
        case 'GET':
            return {
                ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
                tasks: action.data
            }
        case 'ADD':
                return {
                    ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
                    tasks: state.tasks.concat(action.data)
                }
        case 'DELETE':
                return {
                    ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia)
                    tasks: state.tasks.filter(task => task !== action.data)
                }
      default:
        return state;
    }
}

function Provider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    
    const value = {  
        list_task : state.tasks,
        updateData: (data,type) => {
            dispatch({ type: type, data });
        }
    };

    return ( 
    <TasksContext.Provider value ={value}> 
        {children} 
    </TasksContext.Provider>
    );

}
export default Provider