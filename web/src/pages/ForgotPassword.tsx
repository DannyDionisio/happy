import React, { FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../services/api'

import '../assets/styles/pages/reset-password.css'

import MainHeader from '../components/MainHeader'

interface EmailMessage {
	showEmail: boolean
}

export default function ForgotPassword<EmailMessage>() {
	const [email, setEmail] = useState('')

	const history = useHistory()

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if (email === '') {
			setEmail({ showEmail: false, messageFromServer: '' })
		}
		const { data } = await api.post('forgot-password', { email })

		localStorage.setItem('token', data.token)

		history.push('/')
	}

	return (
		<div id='forgot-password'>
			<MainHeader />

			<main>
				<Link to='/' className='go-back'>
					<FiArrowLeft size={32} color='#15C3D6' />
				</Link>

				<form className='forgot-password-form' onSubmit={handleSubmit}>
					<legend>Esqueci a senha</legend>

					<span>
						Sua redefinição de senha será enviada para o e-mail
						cadastrado.
					</span>

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

					<button type='submit' className='send-button'>
						Enviar
					</button>
				</form>
				{showNullError && (
					<div>
						<p>O email não pode ser nulo.</p>
					</div>
				)}
				{showError && (
					<div>
						<p>Email não cadastrado. Por favor tente novamente.</p>
					</div>
				)}
				{messageFromServer && (
					<div>
						<p>Email para redefinir senha enviado com sucesso!</p>
					</div>
				)}
			</main>
		</div>
	)
}
