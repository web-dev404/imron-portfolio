import React, {useEffect, useState} from "react";
import {Navbar} from "./components";
import Preloader from "./components/Preloader/Preloader";
import {About, Footer, Header, Skills, Testimonial, Work} from "./container";
import './scss/style.scss';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		document.querySelector('.profile__img').onload = () => {
			document.querySelector('body').style.overflowY = 'auto';
			setIsLoading(false);
		}
	}, []);
	
	let defaultLanguage =
		window.navigator.userLanguage || window.navigator.language;
	const languageFistTwo = defaultLanguage.substr(0, 2);
	
	if (!localStorage.getItem('currentLang')) {
		localStorage.setItem('currentLang', languageFistTwo);
	}
	
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