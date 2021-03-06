import Head from 'next/head'

const Layout = (props) => (
	<div>
		<Head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, intial-scale=1.0" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
			<link rel="shortcut icon" type="image/png" href="img/favicon.png" />
			<title>Natours | Exciting tours for adventurous people</title>
		</Head>
		<div>
			{props.children}
		</div>
	</div>
)

export default Layout;
