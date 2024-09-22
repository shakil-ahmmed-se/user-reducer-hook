import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import { useReducer, useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import PatientManagement from './components/PatientManagement/PatientManagement';


const initiaState = {count:0};

const reducer =(state, action) =>{
  if (action.type === 'add_count'){
    return {...state, count: state.count + 1}

  }
  if (action.type ==='minius_count'){
    return {...state, count: state.count - 1}
  }

    throw Error('Unknown action.');

}


function App() {
  const [user, setUser] = useState(0);
  const [state, dispatch] = useReducer(reducer, initiaState)
  return (
    <div className="App">
      <button onClick={()=>{dispatch({type:'add_count'})}}>
        Add Count
      </button>
      <button onClick={()=>{dispatch({type:'minius_count'})}}>
        Minius Count
      </button>
      <ReducerCount count={state.count}></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
