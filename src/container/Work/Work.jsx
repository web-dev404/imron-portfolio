"use strict";
import React, {useEffect, useState} from 'react';
import './Work.scss'
import {AiFillEye, AiFillGithub} from "react-icons/ai";
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from "../../wrapper";
import {urlFor, client} from "../../client";

// Swiper
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query)
            .then((data) => {
                setWorks(data);
                setFilterWork(data);
            })
    }, [])

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{y: 100, opacity: 0}])

        setTimeout(() => {
            setAnimateCard([{y: 0, opacity: 1}]);

            if (item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500)
    }

    return (
        <>
            <h2 className={'head-text'}>Моё креативное <span>Портфолио</span></h2>

            <motion.div
                animate={animateCard}
                transition={{duration: .5, delayChildren: .5}}
                className={'app__work-portfolio'}
            >
                <Swiper
                    modules={[Navigation, A11y]}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    spaceBetween={20}
                    autoHeight={true}
                    breakpoints={{
                        1700: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {filterWork.map((work, index) => (
                        <SwiperSlide key={index}>
                            <a href={work.projectLink} target={'_blank'} rel={'noreferrer'} className={'app__work-item app__flex'} key={index}>
                                <div className="app__work-img app__flex">
                                    <img src={urlFor(work.imgUrl)} alt={work.name}/>

                                    <motion.div
                                        whileHover={{opacity: [0, 1]}}
                                        transition={{duration: .25, ease: 'easeInOut', straggerChildren: .5}}
                                        className={'app__work-hover app__flex'}
                                    >
                                        <a>
                                            <motion.div
                                                whileInView={{scale: [0, 1]}}
                                                whileHover={{scale: [1, .9]}}
                                                transition={{duration: .25}}
                                                className={'app__flex'}
                                            >
                                                <AiFillEye/>
                                            </motion.div>
                                        </a>
                                    </motion.div>
                                </div>

                                <div className="app__work-content app__flex">
                                    <h4 className="bold-text">{work.title}</h4>
                                    <p className={'p-text'} style={{marginTop: 10}}>{work.description}</p>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </>
    )
}
export default AppWrap(
    MotionWrap(Work, 'app__work'),
    'work',
    'app__primarybg'
);