import './header.css';
import React from 'react';
import {useState} from 'react' 
// import Header from './Header'
import logo from './logo.png'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header>
      <nav>
        <h1 className="logo">
          <Link to='/'>
            <img src={logo} alt="logo" />
          </Link>
        </h1>

        <h2 className="visually-hidden">메뉴</h2>
        <ul className="gnb-list">
          <li className="gnb-item">
            <Link to='/menu1'>menu1</Link>
          </li>
          <li className="gnb-item">
            <Link to='/menu2'>menu2</Link>
          </li>
          <li className="gnb-item">
            <a href="./menu3.html">menu3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
