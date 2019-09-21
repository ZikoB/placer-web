import Head from 'next/head'
import Navbar from './Navbar'

import styled from 'styled-components'

const PageLayout = styled.div`
	background-color: blue;
`

const Layout = () => (
	<PageLayout>
		<Head>
			<title>PlacerWeb</title>
		</Head>
		<Navbar />
	</PageLayout>
)

export default Layout
