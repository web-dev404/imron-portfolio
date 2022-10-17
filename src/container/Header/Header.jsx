"use strict";
import {motion} from 'framer-motion'
import React from 'react';
import {FiDownload} from "react-icons/fi";
import summaryEng from '../../assets/summary-english.docx';
import summary from '../../assets/summary.docx';
import {images} from '../../constants';
import {AppWrap} from '../../wrapper'
import './Header.scss';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
}

const Header = () => {
	const currentLanguage = localStorage.getItem('currentLang');
	
	return (
		<div id={'home'} className={'app__header app__flex'}>
			<motion.div
				whileInView={{x: [-100, 0], opacity: [0, 1]}}
				transition={{duration: .5}}
				className={'app__header-info'}
			>
				<div className={'app__header-badge'}>
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{marginLeft: 20}}>
							<p className="p-text">{currentLanguage === 'ru' ? 'Привет, Я' : 'Hello, I am'}</p>
							<h1 className="head-text">Imron</h1>
						</div>
					</div>
					
					<div className="tag-cmp app__flex">
						<div className="p-text">{currentLanguage === 'ru' ? 'FrontEnd Разработчик' : 'FrontEnd Developer'}</div>
						<div className="p-text">{currentLanguage === 'ru' ? '3 года опыта' : '3 years of experience'}</div>
					</div>
					
					<a href={currentLanguage === 'ru' ? summary : summaryEng}
					   className={'cv-btn'}>{currentLanguage === 'ru' ? 'Скачать CV' : 'Download CV'}
						<span><FiDownload/></span></a>
				</div>
			</motion.div>
			
			<motion.div
				whileInView={{opacity: [0, 1]}}
				transition={{duration: .5, delayChildren: .5}}
				className={'app__header-img'}
			>
				<img className={'profile__img'} src={images.profile3} alt="profile_bg"/>
				
				<motion.img
					whileInView={{scale: [0, 1]}}
					transition={{duration: 1, ease: 'easeInOut'}}
					className={'overlay_circle'}
					src={images.circle}
					alt={'profile_circle'}
				/>
			</motion.div>
			
			<motion.div
				variant={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className={'app__header-circles'}
			>
				{[images.react, images.nextjs, images.typescript2].map((circle, index) => (
					<div key={`circle-${index}`} className={'circle-cmp app__flex'}>
						<img src={circle} alt="circle"/>
					</div>
				))}
			</motion.div>
		</div>
	)
}
export default AppWrap(Header, 'home');