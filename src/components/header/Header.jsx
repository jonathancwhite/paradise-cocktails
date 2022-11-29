import React from 'react';
import logo from '../../assets/img/paradise-cocktails_logo.png';

function Header() {
  return (
	<div className="header">
		<a href="/"><img src={logo} alt="Paradise Cocktails Logo" /></a>
	</div>
  )
}

export default Header