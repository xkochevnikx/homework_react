import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../../context/AuthContextProvider';
import MyButton from '../Button/MyButton';

const NavBar = () => {
    const { setIsAuth } = useContext(authContext);
    const navigate = useNavigate();

    function logout() {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigate('/login');
    }
    return (
        <div className='navbar'>
            <div
                style={{ display: 'flex', alignItems: 'center' }}
                className='navbar_links'>
                <Link to='/about'>о сайте</Link>
                <Link to='/posts'>посты</Link>
                <MyButton onClick={logout}>выйти</MyButton>
            </div>
        </div>
    );
};

export default NavBar;
