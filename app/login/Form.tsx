'use client';

import { useState, useRef, FormEvent } from 'react'
import s from './form.module.scss'

interface FormElements extends HTMLFormControlsCollection {
	login: HTMLInputElement
	password: HTMLInputElement
}

interface FormElement extends HTMLFormElement {
	readonly elements: FormElements
} 

const handleSubmit = async (e: FormEvent<FormElement>) => {
	e.preventDefault()
	const regex = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/
	const identity = e.currentTarget.elements.login.value
	const password = e.currentTarget.elements.password.value
	await fetch('https://api.chsittt.kz/rpc/login', {
		method: 'POST',
		headers: new Headers({
			'Accept-Time': '2 hours',
			'Content-Type': 'Application/json',
			'Access-Control-Request-Method': 'POST',
			Origin: 'http://www.chsittt.kz',
		}),
		credentials: 'same-origin',
		body: JSON.stringify({ identity, password }),
	})
}

export default function Form() {
	const [focused, setFocused] = useState(false)
	const ref = useRef<any>()
	const [focused1, setFocused1] = useState(false)
	const ref1 = useRef<any>()

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
		<form className={s.wrapper} onSubmit={handleSubmit}>
			<div className={s.container}>
				<label htmlFor='login' className={focused ? `${s.label + ' ' + s.focused}` : s.label} onClick={setFocus}>
					Ваш логин
				</label>
				<input
					ref={ref}
					type='text'
					name='login'
					onFocus={() => setFocused(true)}
					onBlur={(e) => e.target.value.length === 0 && setFocused(false)}
				/>
			</div>
			<div className={s.container}>
				<label htmlFor='password' className={focused1 ? `${s.label + ' ' + s.focused}` : s.label} onClick={setFocus1}>
					Ваш пароль
				</label>
				<input
					ref={ref1}
					type='password'
					name='password'
					onFocus={() => setFocused1(true)}
					onBlur={(e) => e.target.value.length === 0 && setFocused1(false)}
				/>
			</div>
			<button>Войти</button>
		</form>
	)
}
