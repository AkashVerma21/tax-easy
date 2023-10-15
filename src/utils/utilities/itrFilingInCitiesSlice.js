import { createSlice } from "@reduxjs/toolkit";

const itrFilingInCitiesSlice = createSlice({
    initialState: {
        data: '7+ YEARS OF EXCELLANCE'
    },
    name: 'itrFilingInCities',
    reducers:{
        itrFilingInCitiesUpdate: (state, action)=>{
            state.data = action.payload
        }
    }
})

export const {itrFilingInCitiesUpdate} = itrFilingInCitiesSlice.actions;
export default itrFilingInCitiesSlice.reducer;