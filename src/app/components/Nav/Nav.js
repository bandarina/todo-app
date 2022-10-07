import './Nav.css';


export const Nav = ({darkMode}) => {


    return (
        <nav style={{backgroundColor: darkMode ? '#3e3e42' : '#EBECF0', boxShadow: darkMode ? '0 3px 5px #252526' : '0 3px 5px #949494'}}>
            <div className='nav-wrapper'>
                <div className={darkMode ? 'nav-title-dark' : 'nav-title-light'} ><span className='title'>To-Do app</span></div>
            </div>
        </nav>
    )
}