"use strict";
import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import {client, urlFor} from "../../client";
import {AppWrap, MotionWrap} from "../../wrapper";
import './About.scss'

const About = () => {
	const [abouts, setAbouts] = useState([]);
	const currentLanguage = localStorage.getItem('currentLang');
	
	useEffect(() => {
		const query = '*[_type == "abouts"]';
		
		client.fetch(query)
			.then((data) => setAbouts(data))
	}, [])
	
	return (
		<>
			{currentLanguage === 'ru' ?
				<h2 className={'head-text'}>Я знаю, что <span>Хорошие Сайты</span> <br/>означают <span>Хороший Бизнес</span>
				</h2> :
				<h2 className={'head-text'}>I Know that <span>Good Websites</span> <br/>means <span>Good Business</span>
				</h2>}
			
			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{opacity: 1}}
						whileHover={{scale: 1.1}}
						transition={{duration: .5, type: 'tween'}}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={urlFor(about.imgUrl)} alt={about.title}/>
						<h2 className={'bold-text'}
						    style={{marginTop: 20}}>{currentLanguage === 'ru' ? about.title : about.titleEng}</h2>
						<p className={'p-text'}
						   style={{marginTop: 10}}>{currentLanguage === 'ru' ? about.description : about.descriptionEng}</p>
					</motion.div>
				))}
			</div>
		</>
	)
}
export default AppWrap(
	MotionWrap(About, 'app__about'),
	'about',
	'app__whitebg'
);