"use strict";
import {motion} from 'framer-motion';
import React, {useState} from 'react';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {images} from '../../constants';
import '../Preloader/Preloader'
import './Navbar.scss'

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const hrefLinks = ['home', 'about', 'work', 'skills', 'contact']
	
	return (
		<nav className={'app__navbar'}>
			<div className={'app__navbar-logo'}>
				<img src={images.logo} alt="logo"/>
			</div>
			
			<ul className={'app__navbar-links'}>
				{['Главная', 'обо мне', 'работы', 'умения', 'контакты'].map((item, index) => (
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
		</nav>
	)
}
export default Navbar;