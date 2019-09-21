import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
	colors: {
		dark_blue: '#123075',
		red: '#FA2B56',
		font_blue: '#1A47B0'
	}
}

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		)
	}
}
