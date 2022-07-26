"use strict";
import React, {useEffect, useState} from 'react';
import './Testimonials.scss'
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from "../../wrapper";
import {urlFor, client} from "../../client";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi";

// Swiper
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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
            >
                {testimonials.map((tst, testIndex) => (
                    <SwiperSlide key={testIndex}>
                        <div className={'app__testimonial-item app__flex'}>
                            <img src={urlFor(tst.imgurl)} alt="testimonial"/>
                            <div className={'app__testimonial-content'}>
                                <p className="p-text">{tst.feedback}</p>
                                <div>
                                    <h4 className="bold-text">{tst.name}</h4>
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
                        <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
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