import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import ReactSVG from 'react-svg'

const Navbar = () => {
	const [width, setWidth] = useState('0px')
	const [windowWidth, setWindowWidth] = useState('0px')

	const handleClick = () => {
		document.querySelector('#openBtn').click()
	}

	const openMenu = () => {
		setWidth('250px')
		document.body.style.overflowY = 'hidden'
	}
	const closeMenu = () => {
		setWidth('0px')
		document.body.style.overflowY = 'initial'
	}

	const handleWindowChange = () => {
		setWindowWidth(window.innerWidth)
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowChange)

		handleWindowChange()
		return () => {
			window.removeEventListener('resize', handleWindowChange)
		}
	}, [])

	return (
		<nav>
			<ReactSVG className="logo" src="../static/logo_vector.svg" />
			{windowWidth < 750 ? (
				<>
					<button className="menu-button" type="button" onClick={openMenu}>
						<div />
						<div />
					</button>{' '}
					<ul className="mobile-menu">
						<span className="close-menu" onClick={closeMenu}>
							&#10006;
						</span>
						<li>
							<Link href="/">
								<a href="#">Home</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a href="#">About</a>
							</Link>
						</li>
						<style jsx>{`
							ul {
								width: ${width};
							}
						`}</style>
					</ul>
				</>
			) : (
				<ul className="desktop-menu">
					<li>
						<Link href="/">
							<a href="#">Home</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a href="#">About</a>
						</Link>
					</li>
				</ul>
			)}
		</nav>
	)
}

export default Navbar
