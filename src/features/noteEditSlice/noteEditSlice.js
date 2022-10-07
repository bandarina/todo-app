import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'editForm',
    initialState: {
        title: '',
        content: '',
        isComplete: false,
        isFavorite: false
    },
    reducers: {
        onChangeTitle: (state, action) => {
            state.title = action.payload;
        
        },
        onChangeContent: (state, action) => {
            state.content = action.payload;
        },
        loadData : (state, action) => {
            state.title = action.payload.title;
            state.content = action.payload.content;
            if(action.payload.id !== undefined){
                state.id = action.payload.id;
            }
        },
        clearData: (state) => {
            state.title = '';
            state.content = '';
        }
    }
}
const noteEditReducer = createSlice(options);

export const {onChangeTitle, onChangeContent, loadData, clearData} = noteEditReducer.actions;
export const selectTitle = (state) => state.editForm.title;
export const selectContent = (state) => state.editForm.content;
export const selectId = (state) => state.editForm.id;
export const selectIsComplete = (state) => state.editForm.isComplete;
export default noteEditReducer.reducer;