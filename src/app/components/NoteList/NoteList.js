import './NoteList.css'
import { FavoriteList } from '../FavoriteList/FavoriteList';
import { selectNotes } from '../../../features/noteList/noteListSlice';
import { useSelector } from 'react-redux';
import {Note} from '../Note/Note';

export const NoteList = () => {
    const notes = useSelector(selectNotes);

    return (

        <div className='NoteList'>
            <FavoriteList />
            <div className='note-list-title'>
                <h1>Notes</h1>
                <hr />
            </div>
            {notes.map((element, index) => <Note key={index} id={element.id} title={element.title} content={element.content} isComplete={element.isComplete} isFavorite={element.isFavorite}/>)}
        </div>
    )
}