import React from 'react'
import LogoImg from '../assets/images/map-marker.svg'
import LogoTitle from '../assets/images/logo-title.svg'

import '../assets/styles/components/mainHeader.css'

export default function MainHeader() {
	return (
		<aside>
			<header>
				<img src={LogoImg} alt='Logo' />
				<img src={LogoTitle} alt='Logo Title' />
			</header>
			<footer>
				<strong>Amadora</strong>
				<span>Lisboa</span>
			</footer>
		</aside>
	)
}
