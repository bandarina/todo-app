import './Note.css';
import favorite from './favorite.svg';
import favoriteFill from './favoriteFill.svg';
import deleteIcon from './delete.svg';
import task from './task.svg';
import taskFill from './taskFill.svg';
import { useSelector } from 'react-redux';
import { selectTheme } from '../Settings/settingsSlice';
import { useDispatch } from 'react-redux';
import { removeNote, completeNote, favoriteNote } from '../../../features/noteList/noteListSlice';
import { loadData } from '../../../features/noteEditSlice/noteEditSlice';
import { useNavigate } from 'react-router-dom';



export const Note = ({id, title, content, isComplete, isFavorite}) => {

    const dispatch = useDispatch();
    const darkMode = useSelector(selectTheme);
    const navigate = useNavigate()
    
    const editNote = () => {

        dispatch(loadData({id: id, title: title, content: content}));
        navigate('/editnote');
    }

    const getStyle = () => {
        if(isComplete){
            return 'invert(18%) sepia(73%) saturate(5501%) hue-rotate(103deg) brightness(93%) contrast(109%)';
        }
        if(!isComplete && darkMode){
            return 'invert(100%) sepia(0%) saturate(831%) hue-rotate(233deg) brightness(111%) contrast(101%)';
        }
        else{
            return 'invert(0%) sepia(1%) saturate(7487%) hue-rotate(85deg) brightness(91%) contrast(100%)';
        }
    }

    return (
        <div className='Note' style={{opacity: isComplete ? '60%' : '1'}}>
            <div className='note-title'>
                <h2>{title}</h2>
                <img src={isComplete ? taskFill : task} alt='task' className='complete-button' onClick={() => dispatch(completeNote({id: id}))} style={{filter: getStyle()}} />
                <hr/>
            </div>
            <div className='note-text'style={{textDecoration: isComplete ? 'line-through' : 'none'}} onClick={editNote}>
                <span>{content}</span>
            </div>
            <div className='note-actions'>
                <div className='note-actions-status'>
                    <h3>{isComplete ? 'Complete' : 'Not complete'}</h3>
                </div>
                <div className='note-actions-buttons'>
                    <img src={isFavorite ? favoriteFill : favorite} alt='favorite' onClick={()=> dispatch(favoriteNote({id: id}))} style={{filter: darkMode ? 'invert(100%) sepia(0%) saturate(831%) hue-rotate(233deg) brightness(111%) contrast(101%)' : 'invert(0%) sepia(1%) saturate(7487%) hue-rotate(85deg) brightness(91%) contrast(100%)'}}/>
                    <img src={deleteIcon} alt='delete-icon' onClick={() => dispatch(removeNote({id: id}))} style={{filter: darkMode ? 'invert(100%) sepia(0%) saturate(831%) hue-rotate(233deg) brightness(111%) contrast(101%)' : 'invert(0%) sepia(1%) saturate(7487%) hue-rotate(85deg) brightness(91%) contrast(100%)'}} />
                </div>
            </div>
        </div>
    )
}