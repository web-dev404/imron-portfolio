"use strict";
import React, {useEffect, useState} from 'react';
import './Skills.scss'
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from "../../wrapper";
import {urlFor, client} from "../../client";
import ReactTooltip from "react-tooltip";

const Skills = () => {
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        const works = [
            {
                year: 2019,
                name: 'Front-End Разработчик',
                company: 'Weblancer',
                descr: 'Брал заказы на Weblancer'
            },
            {
                year: 2020,
                name: 'Front-End Разработчик',
                company: 'OpenShop',
                descr: 'Работал в интернет магазине OpenShop в качестве Front-End разработчика'
            },
            {
                year: 2021,
                name: 'Front-End Разработчик',
                company: 'Freelancehunt',
                descr: 'Брал заказы на бирже фриланса Freelancehunt'
            },
            {
                year: 2022,
                name: 'Front-End Разработчик',
                company: 'Kelyan Media',
                descr: 'Работал в компании Kelyan Media в качестве Front-End React разработчика'
            },
        ]

        client.fetch(query)
            .then((data) => {
                setExperience(data);
            });

        client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data);
            })
    }, [])

    return (
        <>
            <h2 className={'head-text'}>Навыки & Опыт</h2>

            <div className="app__skills-container">
                <motion.div
                    className={'app__skills-list'}
                >
                    {skills?.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: .5}}
                            className={'app__skills-item app__flex'}
                            key={skill.name}
                        >
                            <div style={{backgroundColor: skill.bgColor}} className="app__flex">
                                <img src={urlFor(skill.icon)} alt={skill.name}/>
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={'app__skills-exp'}
                >
                    {experience?.map(experience => (
                        <motion.div
                            className={'app__skills-exp-item'}
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>

                            <motion.div
                                className={'app__skills-exp-works'}
                            >
                                {experience.works.map(work => (
                                    <div key={work.name}>
                                        <motion.div
                                            whileInView={{opacity: [0, 1]}}
                                            transition={{duration: .5}}
                                            className={'app__skills-exp-work'}
                                            data-tip
                                            data-for={work.name}
                                        >
                                            <h4 className={'bold-text'}>{work.name}</h4>
                                            <p className={'p-text'}>{work.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect={'solid'}
                                            arrowColor={'#fff'}
                                            className={'skills-tooltip'}
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}
export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg'
);