"use strict";
import React from 'react';
import './Preloader.scss'

const Preloader = () => {
    return (
        <div className={'Preloader'}>
            <div className={'body'}>
              <span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
                <div className='base'>
                    <span></span>
                    <div className='face'></div>
                </div>
            </div>
            <div className='longfazers'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1 className={'preloader__h1'}>Загрзука...</h1>
        </div>
    )
}
export default Preloader;