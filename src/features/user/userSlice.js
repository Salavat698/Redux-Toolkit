import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: '',
}

export const userSlice = createSlice({
    name:'user', // даем имя редюсеру
    initialState, // состояние из начальное
    reducers:{ //обьект с фукций которое будет управлять состояние
        setFirstName : (state,action) =>{
            // в action.payload -это обьект куда будут с UI попдадать данные
            state.firstName = action.payload
        },
        setLastName : (state,action) =>{
            // в action.payload -это обьект куда будут с UI попдадать данные
            state.lastName = action.payload
        },
    }
})

// экспортируем функцмю из userSlice
export const {setFirstName,setLastName} = userSlice.actions
export default userSlice.reducer