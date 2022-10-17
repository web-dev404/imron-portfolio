"use strict";
import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react';

// Swiper
import {A11y, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {client, urlFor} from "../../client";
import {AppWrap, MotionWrap} from "../../wrapper";
import './Testimonials.scss'

const Testimonial = () => {
	const [brands, setBrands] = useState([]);
	const [testimonials, setTestimonials] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	
	const currentLanguage = localStorage.getItem('currentLang');
	
	const handleClick = (index) => {
		setCurrentIndex(index);
	}
	
	useEffect(() => {
		const query = '*[_type == "testimonials"]';
		const brandsQuery = '*[_type == "brands"]';
		
		client.fetch(query)
			.then((data) => {
				setTestimonials(data);
			});
		
		client.fetch(brandsQuery)
			.then((data) => {
				setBrands(data);
			})
	}, [])
	
	return (
		<>
			<Swiper
				modules={[Navigation, A11y]}
				slidesPerView={1}
				navigation
				loop={true}
				autoHeight={true}
			>
				{testimonials.map((tst, testIndex) => (
					<SwiperSlide key={testIndex}>
						<div className={'app__testimonial-item app__flex'}>
							<img src={urlFor(tst.imgurl)} alt="testimonial"/>
							<div className={'app__testimonial-content'}>
								<p className="p-text">{currentLanguage === 'ru' ? tst.feedback : tst.feedbackEng}</p>
								<div>
									<h4 className="bold-text">{currentLanguage === 'ru' ? tst.name : tst.nameEng}</h4>
									<h5 className="p-text">{tst.company}</h5>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			
			<div className={'app__testimonial-brands app__flex'}>
				{brands.map(brand => (
					<motion.div
						whileInView={{opacity: [0, 1]}}
						transition={{duration: .5, type: 'tween'}}
						key={brand._id}
					>
						<img src={urlFor(brand.imgUrl)} className={brand.name} alt={brand.name}/>
					</motion.div>
				))}
			</div>
		</>
	)
}

export default AppWrap(
	MotionWrap(Testimonial, 'app__testimonial'),
	'testimonials',
	'app__primarybg'
);