import { createSlice } from "@reduxjs/toolkit";

const nextTodoId =(todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

const options = {
    name: 'notelist',
    initialState: {
        noteList: []
    },
    reducers: {
        addNote: (state, action) => {
            if(action.payload.id !== undefined){
                state.noteList.map((element) => {
                    if(element.id === action.payload.id){
                        element.title = action.payload.title;
                        element.content = action.payload.content;
                        element.isComplete = false;
                    }
                });
            } else{
            const id = nextTodoId(state.noteList);
            const title = action.payload.title;
            const content = action.payload.content;
            const isComplete = false;
            state.noteList.push({id: id, title, content, isComplete});
        }
        },
        removeNote: (state, action) => {
            state.noteList = state.noteList.filter((element) => element.id !== action.payload.id);
        },
        completeNote: (state, action) => {
            state.noteList.map((element) => {
                if (element.id === action.payload.id){
                    element.isComplete = !element.isComplete;
                }
            });
            
        },
        favoriteNote: (state, action) => {
            state.noteList.map((element) => {
                if(element.id === action.payload.id){
                    element.isFavorite = !element.isFavorite;
                }
            });
        },
        editNote: (state, action) => {
            state.noteList.map((element) => {
                if (element.id === action.payload.id){
                    element.title = action.payload.title;
                    element.content = action.payload.content;
                }
            })
        }

    }
}

const noteListSlice = createSlice(options);
export const { addNote, removeNote, completeNote, favoriteNote, editNote } = noteListSlice.actions;
export const selectNotes = (state) => state.notelist.noteList;
export const selectFavoriteNotes = (state) => {
    const favoriteList = state.notelist.noteList.filter((element) => element.isFavorite === true);
    return favoriteList;
}
export default noteListSlice.reducer;