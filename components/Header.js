import Image from 'next/image'
import Button from './Button'

function Header() {
	return (
		<header className="header">
			<div className="logo-box">
				<Image
					src="/logo-white.png"
					alt="Logo"
					className="logo"
					width={117}
					height={60}
				/>
			</div>
			<div className="text-box">
				<h1 className="heading-primary">
					<span className="heading-primary-main">Outdoors</span>
					<span className="heading-primary-sub">is where life happens</span>
				</h1>

				<Button />
			</div>
		</header>
	)
}

export default Header;
