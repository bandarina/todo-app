import './Menu.css';
import { NavLink } from 'react-router-dom';
import homeIcon from './homeIcon.svg';
import editIcon from './editIcon.svg';
import settingsIcon from './settingsIcon.svg';


export const Menu = ({darkMode}) => {
    return (
        <div className='Menu' style={{backgroundColor: darkMode ? '#3e3e42' : '#EBECF0'}}>
            <NavLink className={({isActive})=> isActive ? 'navActive' : 'undefined'} end to='/'><div className='menu-item'>
                <img src={homeIcon} alt='home-icon' style={{filter: darkMode ? 'invert(100%) sepia(0%) saturate(831%) hue-rotate(233deg) brightness(111%) contrast(101%)' : 'invert(0%) sepia(1%) saturate(7487%) hue-rotate(85deg) brightness(91%) contrast(100%)'}}/>
                <p>Home</p>
            </div>
            </NavLink>
            <NavLink className={({isActive})=> isActive ? 'navActive' : 'undefined'} to='/editnote'><div className='menu-item'>
                <img src={editIcon} alt='edit-icon' style={{filter: darkMode ? 'invert(100%) sepia(0%) saturate(831%) hue-rotate(233deg) brightness(111%) contrast(101%)' : 'invert(0%) sepia(1%) saturate(7487%) hue-rotate(85deg) brightness(91%) contrast(100%)'}} />
                <p>Create note</p>
            </div>
            </NavLink>
            <NavLink className={({isActive})=> isActive ? 'navActive' : 'undefined'} to='/settings'><div className='menu-item'>
                <img src={settingsIcon} alt='settings-icon' style={{filter: darkMode ? 'invert(100%) sepia(0%) saturate(831%) hue-rotate(233deg) brightness(111%) contrast(101%)' : 'invert(0%) sepia(1%) saturate(7487%) hue-rotate(85deg) brightness(91%) contrast(100%)'}}/>
                <p>Settings</p>
            </div>
            </NavLink>
            

        </div>
    )
}