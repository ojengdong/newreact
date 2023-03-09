import './header.css';
import React from 'react';
import {useState} from 'react' 
// import Header from './Header'
import logo from './logo.png'

const styles = {
    nav : {
        display : "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor : "#333"
    },
    image : {
        winth : "50px",
        height : "50px",
        margin : "5px 20px"
    },
    gnb : {
        display : 'flex',
        width : '300px',
        justifyContent: "space-between"
    },
    list : { 
        justifyContent: "center",
        alignItems: "center",
        marginRight : "40px",
        color : "#fff"
    }
}
function Header() {
  return (
    <div className="App">
      <div className='wrapper'>
        <header className='globel-header'>
          <nav style={styles.nav}>
            <h1 className='logo'>
              <a href="">
                <img src={logo} alt="" style={styles.image}/>
                </a>
              </h1>
              <ul className='gnb'style={styles.gnb}>
                <li className="gnb-list">
                    <a href="" style={styles.list}>menu1</a>
                    </li>
                <li className="gnb-list">
                    <a href="" style={styles.list}>menu2</a>
                    </li>
                <li className="gnb-list">
                    <a href="" style={styles.list}>menu3</a>
                    </li>
              </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
