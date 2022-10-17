import React from 'react';
import {NavigationDots, SocialMedia} from '../components';

const AppWrapper = (Component, idName, classNames) => function HOC() {
	return (
		<div id={idName} className={`app__container ${classNames}`}>
			<SocialMedia/>
			
			<div className={'app__wrapper app__flex'}>
				<Component/>
				
				<div className="copyright">
					<p className={'p-text'}>@2022 Imron</p>
					<div
						className="p-text">{localStorage.getItem('currentLang') === 'ru' ? 'Все права защищены' : 'All rights reserved'}</div>
				</div>
			</div>
			
			<NavigationDots active={idName}/>
		</div>
	)
}

export default AppWrapper;