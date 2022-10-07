import { configureStore } from '@reduxjs/toolkit';
import settings from './components/Settings/settingsSlice';
import editForm from '../features/noteEditSlice/noteEditSlice';
import notelist from '../features/noteList/noteListSlice';
export const store = configureStore({
  reducer: {
    settings: settings,
    editForm: editForm,
    notelist: notelist
  },
});
