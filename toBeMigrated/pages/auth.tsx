import { loginUser } from 'api/login'
import { NextPage } from 'next'
import { useState, FormEvent, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: radial-gradient(circle, #5c5c5c 0%, #000000 100%);
`

const Form = styled.form`
	position: relative;
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	padding: 20px;
`

const H1 = styled.h1`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 16px;
	color: #fff;
`

const Button = styled.button`
	width: 150px;
	background-color: #e50914;
	color: #fff;
	border: none;
	font-size: 20px;
	margin-top: 15px;
	padding: 5px;
	cursor: pointer;
	&:active {
		background-color: #af0a12;
		outline: 2px solid #860f15;
	}
`

const Label = styled.label<{ focused: boolean }>`
	z-index: 1;
	color: #8c8c8c;
	position: absolute;
	top: ${(props) => (props.focused ? '5px' : '5px')};
	left: 10px;
	transform: ${(props) => (props.focused ? 'translateY(0)' : 'translateY(0)')};
	text-align: center;
	font-size: ${(props) => (props.focused ? '12px' : '19px')};
	font-weight: 300;
	transition: all 0.1s ease;
`

const Input = styled.input`
	flex: 3;
	height: 40px;
	padding: 10px 9px 0;
`

const StyledContainer = styled.div`
	width: 300px;
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 5px;
`

interface FormElements extends HTMLFormControlsCollection {
  login: HTMLInputElement
  password: HTMLInputElement
}

interface FormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const Auth: NextPage = () => {
	const [focused, setFocused] = useState(false)
	const ref = useRef<any>()
	const [focused1, setFocused1] = useState(false)
	const ref1 = useRef<any>()

	const handleSubmit = async (e: FormEvent<FormElement>) => {
		e.preventDefault()
		const regex = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;
		const identity = e.currentTarget.elements.login.value
		const password = e.currentTarget.elements.password.value
		// console.log(e.currentTarget.elements.login.value)
		// console.log(e.currentTarget.elements.password.value)
		// console.log(regex.test(password))
		await loginUser({ identity, password }).then(res => console.log(res)).catch(err => console.error(err))
	}

	const setFocus = (e: any) => {
		setFocused(true)
		ref.current.focus()
		e.stopPropagation()
	}

	const setFocus1 = (e: any) => {
		setFocused1(true)
		ref1.current.focus()
		e.stopPropagation()
	}

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit}>
				<H1>Авторизация</H1>
				<StyledContainer>
					<Label htmlFor='login' focused={focused} onClick={setFocus}>
						Ваш логин
					</Label>
					<Input
						ref={ref}
						type='text'
						name='login'
						onFocus={() => setFocused(true)}
						onBlur={(e) => e.target.value.length === 0 && setFocused(false)}
					/>
				</StyledContainer>
				<StyledContainer>
					<Label htmlFor='password' focused={focused1} onClick={setFocus1}>
						Ваш пароль
					</Label>
					<Input
						ref={ref1}
						type='password'
						name='password'
						onFocus={() => setFocused1(true)}
						onBlur={(e) => e.target.value.length === 0 && setFocused1(false)}
					/>
				</StyledContainer>
				<Button>Войти</Button>
			</Form>
		</Wrapper>
	)
}

export default Auth
