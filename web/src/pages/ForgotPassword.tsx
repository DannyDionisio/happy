import React, { FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import '../assets/styles/pages/forgot-password.css'

import MainHeader from '../components/MainHeader'


export default function ForgotPassword() {
	const [email, setEmail] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if (!email) {
			setErrorMessage("Email não pode ser vazio");
			return;
		}

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
							required
							onChange={(event) => {
								setEmail(event.target.value)
							}}
						/>
					</div>
				{errorMessage && (
					<div>
						<p>{errorMessage}</p>
					</div>
				)}

					<button type='submit' className='send-button'>
						Enviar
					</button>
				</form>
			</main>
		</div>
	)
}
