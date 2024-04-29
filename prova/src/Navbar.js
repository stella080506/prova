import React from 'react';
import './Css/Nav.css'



function Nav() {
  return (
    <div className="Navbar-container">
        <nav className='Nav'>
        <img className='senai' src={require('./Fotos/SENAI.png')} alt="Descrição da 
imagem" />
            <ul className='nav-comp' href="/">Home </ul>
            <ul className='nav-comp' href="/">Contato</ul>
            <ul className='nav-comp'>Quem somos</ul>
            
        </nav>
      
      


    </div>
  );
}

export default Nav;