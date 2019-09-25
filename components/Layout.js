import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => (
	<>
		<Head>
			<title>PlacerWeb</title>
			<link
				href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap"
				rel="stylesheet"
			></link>
		</Head>
		<Navbar />
		<main>{children}</main>
		<Footer />
	</>
)

export default Layout
