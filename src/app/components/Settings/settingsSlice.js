import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'settings',
    initialState: {
        darkMode: false
    },
    reducers:{
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
}

const settingsSlice = createSlice(options);

export const { toggleDarkMode } = settingsSlice.actions;
export const selectTheme = (state) => state.settings.darkMode;

export default settingsSlice.reducer;