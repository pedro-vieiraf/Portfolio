import { useState } from 'react';

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={ styles.navbar }>
      <a className={ styles.title } href="/">Portfolio</a>
      <div className={ styles.menu }>
        <img
          className={ styles.menuBtn }
          src={ menuOpen
            ? getImageUrl('nav/closeIcon.png'/* vai nos 10 min */)
            : getImageUrl('nav/menuIcon.png') }
          alt="menu-button"
          onClick={ () => setMenuOpen(!menuOpen) }
        />
        <ul
          className={ `${styles.menuItems} ${menuOpen && styles.menuOpen}` }
          onClick={ () => setMenuOpen(false) }
        >
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#experience">Competências</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>

        </ul>
      </div>
    </nav>
  );
}
