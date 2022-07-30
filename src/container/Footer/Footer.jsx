"use strict";
import React, {useState} from 'react';
import './Footer.scss'
import {images} from '../../constants'
import {AppWrap, MotionWrap} from "../../wrapper";
import {client} from "../../client";

const Footer = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const {name, email, message} = formData;

    const handleChangeInput = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: email,
            message: message
        }

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
    }

    return (
        <>
            <h2 className={'head-text'}>Сделайте себе кофе & свяжитесь со мной</h2>

            <div className={'app__footer-cards'}>
                <div className={'app__footer-card'}>
                    <img src={images.email} alt="email"/>
                    <a href="mailto:imronimronov32@gmail.com" className={'p-text'}>imronimronov32@gmail.com</a>
                </div>

                <div className={'app__footer-card'}>
                    <img src={images.mobile} alt="mobile"/>
                    <a href="tel:+998946053999" className={'p-text'}>+998 (94) 605-39-99</a>
                </div>
            </div>

            {!isFormSubmitted ?
                <div className="app__footer-form app__flex">
                    <div className={'app__flex'}>
                        <input className={'p-text'} type="text" placeholder={'Ваше Имя'} value={name}
                               onChange={handleChangeInput} name={'name'}/>
                    </div>

                    <div className={'app__flex'}>
                        <input className={'p-text'} type="email" placeholder={'Ваш Email'} value={email}
                               onChange={handleChangeInput} name={'email'}/>
                    </div>

                    <div>
                    <textarea value={message} name="message" onChange={handleChangeInput} className={'p-text'}
                              placeholder={'Ваше Сообщение'}/>
                    </div>

                    <button type={'button'} className={'p-text'} onClick={handleSubmit}>{loading ? 'Отправляется' : 'Отправить сообщение'}</button>
                </div>
                : <div>
                    <h3 className={'head-text'}>Спасибо, скоро я свяжусь с вами!</h3>
                </div>
            }

        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
);