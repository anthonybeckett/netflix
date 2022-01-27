import React, { useState, useEffect } from 'react'
import './styles/Nav.css';
import logo from '../resources/logo.png';
import avatar from '../resources/avatar.png';

function Nav() {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		handleShow((window.scrollY > 100) ? true : false);
	} 

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	}, [])

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<div className="nav__contents">
				<img src={logo} alt="Netflix Logo" className="nav__logo" />
				<img src={avatar} alt="Avatar" className="nav__avatar" />
			</div>
		</div>
	)
}

export default Nav
