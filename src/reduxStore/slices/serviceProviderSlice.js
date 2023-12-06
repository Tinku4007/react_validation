import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requstedDetails: []
}

const requstedReducer = createSlice({
    name: "requsted",
    initialState,
    reducers: {
        setrequstedDetails: (state, action) => {
            state.requstedDetails = action.payload
        }
    }
})

export const { setrequstedDetails  } = requstedReducer.actions;
export default requstedReducer