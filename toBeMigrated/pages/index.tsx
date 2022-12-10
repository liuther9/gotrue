/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import { FormEvent, Fragment, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	width: 100%;
	min-height: calc(100vh + 8px);
	color: #fff;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: radial-gradient(circle, #5c5c5c 0%, #000000 100%);
	border-bottom: 8px solid #222222;
`

const H1 = styled.h1`
	font-size: 50px;
	font-weight: 700;
	width: 60%;
	text-align: center;
	margin: 0 auto;
`
const H2 = styled.h2`
	font-size: 26px;
	font-weight: 400;
	width: 70%;
	text-align: center;
	margin: 16px auto;
`

const Input = styled.input`
	flex: 3;
	height: 100%;
	padding: 10px 9px 0;
`

const Form = styled.form`
	position: relative;
	display: flex;
	align-items: center;
	width: 80%;
	height: 60px;
`
const Label = styled.label<{ focused: boolean }>`
	z-index: 1;
	color: #8c8c8c;
	position: absolute;
	top: ${props => props.focused ? '5px' : '50%'};
	left: 10px;
	transform: ${props => props.focused ? 'translateY(0)' : 'translateY(-50%)'};
	text-align: center;
	font-size: ${props => props.focused ? '12px' : '19px'};
	font-weight: 300;
	transition: all 0.1s ease;
`

const Button = styled.button`
	flex: 2;
	height: 100%;
	background-color: #e50914;
	color: #fff;
	border: none;
	font-size: 26px;
	cursor: pointer;
	&:active {
		background-color: #af0a12;
		outline: 2px solid #860f15;
	}
`

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
}

interface FormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const Home: NextPage = () => {
	const [focused, setFocused] = useState(false)

	const handleSubmit = (e: FormEvent<FormElement>) => {
		e.preventDefault()
		console.log(e.currentTarget.elements.email.value)
	}
	
	return (
		<Fragment>
			<Wrapper>
				<H1>Ташметов Тохир Турабекович</H1>
				<H2>ЧАСТНЫЙ СУДЕБНЫЙ ИСПОЛНИТЕЛЬ ЖАМБЫЛЬСКОЙ ОБЛАСТИ</H2>
				<Form onSubmit={handleSubmit}>
					<Label htmlFor='email' focused={focused}>Адрес электронной почты</Label>
					<Input type="email" name='email' onFocus={() => setFocused(true)} onBlur={(e) => e.target.value.length === 0 && setFocused(false)} />
					<Button>Начать</Button>
				</Form>
			</Wrapper>
		</Fragment>
	)
}

export default Home
