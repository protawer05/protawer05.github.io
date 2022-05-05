import { NavLink } from 'react-router-dom';
import logo from '../../resources/logo.svg';
import burgerMenuOpen from '../../resources/burger-menu.svg';
import burgerMenuClose from '../../resources/closeButton.svg';
import './appHeader.css';

const AppHeader = () => {

    const openAndCloseBurger = () => {
        if (window.screen.width <= 767){
            const header = document.querySelector('.header');
            header.classList.toggle('burger-header');
            header.style.zIndex = '777'
            const menu = document.querySelector('.menu__list');
            menu.style.transform = 'translateY(-400px)';
            setTimeout(() => {
                menu.style.transform = 'translateY(0px)'
            }, 0)
            const burgerOpenButton = document.querySelector('.burger__open');
            const burgerCloseButton = document.querySelector('.burger__close');
            burgerOpenButton.style.display = burgerOpenButton.style.display === 'none' ? 'block' : 'none';
            burgerCloseButton.style.display = burgerCloseButton.style.display === 'none' ? 'block' : 'none';

            if (menu.style.display === 'block'){
                menu.style.display = 'none'
            } else {
                menu.style.display = 'block'
            }
        }
    }
    return(
        <header className="header">
            <div className="header__container">
                <a href="#/" className="header__logo">
                    <img src={logo} alt="logo"/>
                </a>
                <div className="header__timer">Тут должен быть таймер</div>
                <div className="header__menu menu">
                    <div onClick={openAndCloseBurger} className="menu__button">
                        <img src={burgerMenuOpen} alt="burgerOpen" className="burger__open"/>
                        <img src={burgerMenuClose} alt="burgerOpen" className="burger__close" style={{display: 'none'}}/>
                    </div>
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <NavLink onClick={openAndCloseBurger} to="/timetable" className="menu__link" style={({isActive}) => ({'color' : isActive ? 'red' : '#fff'})}>Расписание</NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink onClick={openAndCloseBurger} to="/useful" className="menu__link" style={({isActive}) => ({'color' : isActive ? 'red' : '#fff'})}>Чё то полезное</NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink onClick={openAndCloseBurger} to="/1000-7" className="menu__link" style={({isActive}) => ({'color' : isActive ? 'red' : '#fff'})}>1000-7???</NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink onClick={openAndCloseBurger} to="/aboutme" className="menu__link" style={({isActive}) => ({'color' : isActive ? 'red' : '#fff', 'marginRight' : '0px'})}>who i am? </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;