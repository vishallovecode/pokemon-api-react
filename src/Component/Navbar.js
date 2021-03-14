import { React } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'


const NavBar = () => {
    return (
        <Link className='navbar' to='/'>
            <div className='navbar__title navbar__item'>
                <img src='/pokedex_icon.jpg' alt='pokedex icon' />
                <span>
                    Pokedex
                    </span>
            </div>
        </Link>
    )
}
export default NavBar;


