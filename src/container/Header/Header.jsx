"use strict";
import React from 'react';
import './Header.scss';
import {motion} from 'framer-motion'
import {images} from '../../constants';
import {AppWrap} from '../../wrapper'

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
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Imron</h1>
                        </div>
                    </div>

                    <div className="tag-cmp app__flex">
                        <div className="p-text">Front-End Developer</div>
                        <div className="p-text">Freelancer</div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: .5, delayChildren: .5}}
                className={'app__header-img'}
            >
                <img src={images.profile} alt="profile_bg"/>

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
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div key={`circle-${index}`} className={'circle-cmp app__flex'}>
                        <img src={circle} alt="circle"/>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
export default AppWrap(Header, 'home');