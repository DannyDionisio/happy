import React, { useState, useEffect, FormEvent } from 'react'

import '../assets/styles/pages/login.css'

import LogoImg from '../assets/images/map-marker.svg'
import LogoTitle from '../assets/images/logo-title.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../services/api'

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

		await api.post('signin', { email, password })

		history.push('/dashboard')
	}

	return (
		<div id='page-login'>
			<aside>
				<header>
					<img src={LogoImg} alt='Logo' />
					<img src={LogoTitle} alt='Logo Title' />
				</header>
				<footer>
					<strong>Amadora</strong>
					<span>Lisboa</span>
				</footer>
			</aside>
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

						<Link to='' className='forgot-password'>
							Esqueci minha senha
						</Link>
					</div>

					<button
						type='submit'
						className='login-button'
						onClick={() => {}}
					>
						Entrar
					</button>
				</form>
			</main>
		</div>
	)
}

export default Login
