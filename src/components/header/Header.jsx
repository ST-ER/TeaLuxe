import React from 'react';
import style from './Header.module.css'
import '../../App.css'


const Header = () => {
return (
    <header className={style.header}>
        <div className="container">
            <div className={style.header__inner}>
                <a href='#' className={style.logo}>
                    <img src='images/logo.svg' alt='TealuxE' />
                </a>
                <nav className={style.menu}>
                    <ul className={style.menu__list}>
                        <li className={style.menu__item}>
                            <a href='#' className={style.menu__link}>
                                Black
                            </a>
                        </li>
                        <li className={style.menu__item}>
                            <a href='#' className={style.menu__link}>
                                Green
                            </a>
                        </li>
                        <li className={style.menu__item}>
                            <a href='#' className={style.menu__link}>
                                White
                            </a>
                        </li>
                        <li className={style.menu__item}>
                            <a href='#' className={style.menu__link}>
                                Oolong
                            </a>
                        </li>
                        <li className={style.menu__item}>
                            <a href='#' className={style.menu__link}>
                                Pu-erh
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul className={style.userActions}>
                    <li className={style.userActions__item}>
                        <a href='#' className={style.userActions__link}>
                            <img src='images/cart.svg' alt='' />
                        </a>
                    </li>
                    <li className={style.userActions__item}>
                        <a href='#' className={style.userActions__link}>
                            <img src='images/user.svg' alt='' />
                        </a>
                    </li>
                    {/* <li className={style.user-actions__item"><search><form action=""><input type="search" /><button type='submit}></button></form></search></li> */}
                    <li className={`${style.userActions__item} ${style.userActions__itemSearch}`}>
                        <a href='#' className={style.userActions__link}>
                            <img src='images/search.svg' alt='' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
)
};

export default Header;