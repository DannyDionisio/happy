import React, { FormEvent, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import '../assets/styles/pages/reset-password.css'

import MainHeader from '../components/MainHeader'

export default function ResetPassword() {
	const [email, setEmail] = useState('')

	console.log(email)

	function handleSubmit(event: FormEvent) {}

	return (
		<div id='reset-password'>
			<MainHeader />

			<main>
				<Link to='/' className='go-back'>
					<FiArrowLeft size={32} color='#15C3D6' />
				</Link>

				<form className='reset-password-form' onSubmit={handleSubmit}>
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
			</main>
		</div>
	)
}
