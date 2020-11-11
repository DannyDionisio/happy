import React, { useState, FormEvent } from 'react'

import '../assets/styles/pages/login.css'

import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../services/api'

import MainHeader from '../components/MainHeader'

interface User {
	email: string
	password: string
	rememberMe: boolean
}

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [rememberMe, setRememberMe] = useState(false)

	const history = useHistory()

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		const { data } = await api.post('signin', { email, password })

		localStorage.setItem('token', data.token)

		history.push('/dashboard')
	}

	return (
		<div id='page-login'>
			<MainHeader />
			<Link to='/' className='go-back'>
				<FiArrowLeft size={32} color='#15C3D6' />
			</Link>
			<main>
				<form className='login-form' onSubmit={handleSubmit}>
					<legend>Fazer login</legend>

					<div className='input-block'>
						<label htmlFor='email'>E-mail</label>
						<input
							type='email'
							value={email}
							onChange={(event) => {
								setEmail(event.target.value)
							}}
						/>
					</div>

					<div className='input-block'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							value={password}
							onChange={(event) => {
								setPassword(event.target.value)
							}}
						/>
					</div>

					<div className='login-options'>
						<div className='login-options-checkbox'>
							<input
								type='checkbox'
								name='remember-me'
								id='remember-me'
								onClick={() => setRememberMe(true)}
							/>
							<label htmlFor='remember-me'>Lembrar-me</label>
						</div>

						<Link to='/forgot-password' className='forgot-password'>
							Esqueci minha senha
						</Link>
					</div>

					<button type='submit' className='login-button'>
						Entrar
					</button>
				</form>
			</main>
		</div>
	)
}

export default Login
