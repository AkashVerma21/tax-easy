import { configureStore } from "@reduxjs/toolkit";
import itrFilingInCitiesReducer from "./itrFilingInCitiesSlice";

export const store = configureStore({
    reducer: {
        itrFilingInCities: itrFilingInCitiesReducer,
    }
})