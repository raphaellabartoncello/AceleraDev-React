import React, { Component } from 'react';
import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";

class Topbar extends Component {
	render() {
		return (
			<header className="topbar" data-testid="topbar">
				<div className="container">
					<a href="/" className="topbar__logo">
						<LogoSvg alt="Logo Instagram" />
					</a>
				</div>
			</header>
		);
	}
}

export default Topbar;