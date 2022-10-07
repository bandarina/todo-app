import './NoteEditForm.css';
import { selectTheme } from '../Settings/settingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeContent, onChangeTitle, selectId, selectTitle, selectContent, clearData } from '../../../features/noteEditSlice/noteEditSlice';
import saveButton from './saveButton.svg';
import cancelButton from './cancelButton.svg';
import {addNote} from '../../../features/noteList/noteListSlice';
import { useNavigate } from 'react-router-dom';


export const NoteEditForm = () => {
    const id = useSelector(selectId);
    const title = useSelector(selectTitle);
    const content = useSelector(selectContent);
    const darkMode = useSelector(selectTheme);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTitleChange = (e) => {
        dispatch(onChangeTitle(e.target.value));
    }

    const handleContentChange = (e) => {
        dispatch(onChangeContent(e.target.value));
    }
    
    const addNewNote = () => {
        dispatch(addNote({id: id, title: title, content: content}));
        dispatch(clearData());
        navigate('/');
        
    }
    const onCancel = () => {
        dispatch(clearData());
        navigate('/')
    }
    return (
        <div className='NoteEditForm'>
            <input type='text' placeholder='New Title' style={{color: darkMode ? 'white' : 'black'}} onChange={handleTitleChange} value={title}/>
            <hr/>
            <textarea spellCheck='false' rows='4' cols='30' placeholder='Add task here' style={{color: darkMode ? 'white' : 'black'}} onChange={handleContentChange} value={content}/>
            <div className='form-actions'>
                <div className='cancelButton'>
                    <img src={cancelButton} alt='cancel-button' onClick={onCancel}/>
                    <p>Cancel</p>
                </div>
                <div className='saveButton'>
                    <img src={saveButton} alt='save-button' onClick={addNewNote}/>
                    <p>Save</p>
                </div>
                
            </div>
        </div>
    )
}