import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: ''
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem("user",JSON.stringify(state.user))
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer