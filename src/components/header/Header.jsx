import React, { useRef } from "react";
import './header.css'

import { Container } from 'reactstrap';
import logoImg from '../../assets/images/logo3.png'


const navLinks = [
    {
        display: 'Tela Inicial',
        url: '#'
    },
    {
        display: 'Cardápio',
        url: '#'
    },
    {
        display: 'Contato',
        url: '#'
    },
]

const Header = () => {

    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle("active__menu");

    return (
        <header className="header">
            <Container>
                <div className="navigation">

                    <div className="logo">
                        <img src={logoImg} alt="" />
                    </div>

                    <div className="nav__menu" ref={menuRef}>

                        <div className="nav__list__wrapper d-flex align-items-center gap-5">
                            <ul className="nav__list">
                                {navLinks.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <a href={item.url} onClick={menuToggle}>
                                            {item.display}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="menu__right">
                                <div className="custom__search">
                                    <input type="text" placeholder="search item..." />
                                    <span>
                                        <i class="ri-search-line"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>
                            <button className="user__btn"> Login
                            <i class="ri-account-circle-fill"></i>
                            </button>
                        </span>
                    </div>
                    <div className="cart__menu">
                        <span className="cart__icon">
                            <i class="ri-shopping-basket-line"></i>

                            <span className="badge">2</span>
                        </span>
                    </div>
                    <div className="mobile__menu">
                        <span>
                            <i class="ri-menu-line" onClick={menuToggle}></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )
};

export default Header;