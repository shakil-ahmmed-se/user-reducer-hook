import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../../reducers/patientReducer';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT', 
            name: nameRef.current.value, 
            id : state.patients.length +1 ,
        })
        nameRef.current.value = '';
    }
    return (
        <div>
            <h1>Patient Management : {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Enter patient name" />
                <br />
                <button type="submit">Add Patient</button>
                {/* <button type="submit">Remove Paitent</button> */}
                
            </form>
            {
               state.patients.map(pt => 
               <li key={pt.id} onClick={()=> dispatch({type: 'DELETE_PATIENT', id:pt.id})}>{pt.name}</li>
            )
            }
        </div>
    );
};

export default PatientManagement;