import './Settings.css';    
import { useDispatch } from 'react-redux';
import {toggleDarkMode}  from './settingsSlice';
import { useSelector } from 'react-redux';
import { selectTheme } from './settingsSlice';

export const Settings = () => {
    
    const dispatch = useDispatch();
    const darkMode = useSelector(selectTheme);

    

    return(
        <div className='Settings'>
            <div className='settings-section'>
                <h1>Theme</h1>
                <hr/>
                <div className='section-contents'>
                    <p>Light/Dark</p>
                    <label className="switch">
                        <input onChange={() => dispatch(toggleDarkMode())} type="checkbox" checked={darkMode}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}