"use strict";
import React from 'react';
import {BsWhatsapp, BsInstagram, BsTelegram} from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className={'app__social'}>
            <a target={"_blank"} href={'https://t.me/WebDev404'}>
                <BsTelegram />
            </a>
            <a target={"_blank"} href={'https://wa.me/+998946053999'}>
                <BsWhatsapp />
            </a>
            <a target={"_blank"} href={'https://www.instagram.com/imron_mirzarasulov/'}>
                <BsInstagram />
            </a>
        </div>
    )
}
export default SocialMedia;