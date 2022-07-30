import React, {useEffect, useState} from "react";
import './scss/style.scss';
import {About, Footer, Header, Skills, Testimonial, Work} from "./container";
import {Navbar} from "./components";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let mask = document.querySelector('.Preloader');

        window.onload = () => {
            document.querySelector('body').style.overflowY = 'auto';
            setIsLoading(false);
        }
    }, []);
    return (
        <div className={'app'}>
            {isLoading && <Preloader/>}
            <Navbar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default App;