import type { NextPage } from 'next'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`

const Article = styled.article`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	padding: 20px;
	width: 95%;
	height: 400px;
	background-color: #212529;
	margin-top: 20px;
	border-radius: 5px;
`

const Section = styled.section`
	display: flex;
	width: 100%;
`

const H1 = styled.h1`
	color: white;
	font-size: 32px;
	font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
	font-style: italic;
`

const Paragraph = styled.p`
	color: white;
	font-size: 24px;
	width: 80%;
`

const Label = styled.div`
	font-size: 24px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
		'Open Sans', 'Helvetica Neue', sans-serif;
	width: 100%;
	text-align: center;
`

const Home: NextPage = () => {
	return (
		<Container>
			{/* <Label>Частный судебный исполнитель</Label> */}
			<Article>
				<H1>Тохир Ташметов Турабекович</H1>
				<Paragraph>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
					took a galley of type and scrambled it to make a type specimen book. It has survived not
					only five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged.
				</Paragraph>
			</Article>

			<Section></Section>
		</Container>
	)
}

export default Home
