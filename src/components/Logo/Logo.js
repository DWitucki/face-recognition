import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<img alt='' style={{ height: 150, width:150 }} src="https://png.icons8.com/ios/100/000000/face-id.png"></img>
			</Tilt>
		</div>
		);
}

export default Logo;