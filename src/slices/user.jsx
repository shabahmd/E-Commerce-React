import { createSlice } from "@reduxjs/tookkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
        photo: ''
    },
    reducers: {
        signIn: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.photo


        },

        signOut: (state) => {
            state.name = ''
            state.email = ''
            state.photo = ''
        }
    }

})

export const { signIn, signOut } = userSlice.actions
export default userSlice.reducer