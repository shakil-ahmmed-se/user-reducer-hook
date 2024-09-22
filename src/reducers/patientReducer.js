export const patientState = {
    patients:[]
}

export const patientReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name,
            }
            return {...state, patients: [...state.patients, newPatient]};
        case 'DELETE_PATIENT':
            return {...state, patients: state.patients.filter(pt => pt.id !== action.id)};
        default:
            return state;
    }
}