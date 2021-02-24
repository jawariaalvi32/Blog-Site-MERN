import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
            name: '',
            email : '',
        },
    reducers: {
        saveUser( state, action ) {
            console.log(action.payload.name)
            return {
                name: action.payload.name,
                email: action.payload.email
            }
        }
        
    },
    extraReducers: {
    }
})

export const { saveUser } = userSlice.actions;
export default userSlice.reducer



// We can return directly it will set in state but if we have multiple properties set data by yourself