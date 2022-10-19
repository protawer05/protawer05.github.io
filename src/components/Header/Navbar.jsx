import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className={nav ? 'menu active__menu' : 'menu'}>
        <ul className={nav ? 'menu__items active__menu' : 'menu__items'}>
          <li className="menu__item">
            <NavLink
              end
              style={({ isActive }) => ({ color: isActive ? 'red' : 'rgb(223, 218, 218)' })}
              to="/"
              onClick={() => setNav(!nav)}
              className="menu__link">
              Расписание
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? 'red' : 'rgb(223, 218, 218)' })}
              to="/homework"
              onClick={() => setNav(!nav)}
              className="menu__link">
              Домашка
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? 'red' : 'rgb(223, 218, 218)' })}
              to="/homeworkAdd"
              onClick={() => setNav(!nav)}
              className="menu__link">
              Добавление д/з
            </NavLink>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className="mobile_btn">
        {nav ? (
          <AiOutlineClose size={25} color="white" />
        ) : (
          <AiOutlineMenu size={25} color="white" />
        )}
      </div>

    </>
  );
};

export default Navbar;
