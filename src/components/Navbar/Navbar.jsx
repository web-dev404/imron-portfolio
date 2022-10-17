"use strict";
import {motion} from 'framer-motion';
import React, {useState} from 'react';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {images} from '../../constants';
import '../Preloader/Preloader'
import './Navbar.scss'

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const hrefLinks = ['home', 'about', 'work', 'skills', 'contact'];
	
	const currentLanguage = localStorage.getItem('currentLang');
	
	const changeLang = () => {
		currentLanguage === 'ru' ? localStorage.setItem('currentLang', 'en') : localStorage.setItem('currentLang', 'ru');
		window.location.reload();
	}
	
	return (
		<nav className={'app__navbar'}>
			<div className={'app__navbar-logo'}>
				<img src={images.logo} alt="logo"/>
			</div>
			
			<div className={'app-navbar__wrapper'}>
				<ul className={'app__navbar-links'}>
					{(currentLanguage === 'ru' ? ['Главная', 'обо мне', 'работы', 'умения', 'контакты'] : hrefLinks).map((item, index) => (
						<li className={'app__flex p-text'} key={`link-${item}`}>
							<div/>
							<a href={`#${hrefLinks[index]}`}>{item}</a>
						</li>
					))}
				</ul>
				
				<div className="app__navbar-menu">
					<HiMenuAlt4 onClick={() => setToggle(true)}/>
					
					{toggle && (
						<motion.div
							whileInView={{x: [300, 0]}}
							transition={{duration: .85, ease: 'easeOut'}}
						>
							
							<HiX onClick={() => setToggle(false)}/>
							<ul className={'app__navbar-links'}>
								{['home', 'about', 'work', 'skills', 'contact'].map((item) => (
									<li key={item}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</div>
				
				<div className={'language__wrapper'}>
					{localStorage.getItem('currentLang') === 'ru' ?
						<button className={'language__text'} onClick={changeLang}>RU</button> :
						<button className={'language__text'} onClick={changeLang}>EN</button>}
				</div>
			</div>
		</nav>
	)
}
export default Navbar;