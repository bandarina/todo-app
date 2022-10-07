import './FavoriteList.css'
import { useSelector } from 'react-redux';
import { selectFavoriteNotes } from '../../../features/noteList/noteListSlice';
import { Note } from '../Note/Note';

export const FavoriteList = () =>{

    const favoriteList = useSelector(selectFavoriteNotes);

      return (
        <div>  
            <div className='note-list-title'>
                <h1>Favorites</h1>
                <hr />
            </div>
            {favoriteList.map((element, index) => <Note key={index} id={element.id} title={element.title} content={element.content} isComplete={element.isComplete} isFavorite={element.isFavorite}/>)}
        </div>
        );
}
