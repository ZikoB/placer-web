import Layout from '../components/Layout'
import styled from 'styled-components'

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.dark_blue};
`

const Index = () => (
	<Layout>
		<div>
			<Title>PlacerWeb</Title>
			<p>Check our page</p>
		</div>
	</Layout>
)

export default Index
