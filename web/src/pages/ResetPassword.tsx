import React, { FormEvent, useState } from 'react'

import '../assets/styles/pages/reset-password.css'

import MainHeader from '../components/MainHeader'


export default function ResetPassword() {
	const [password, setPassword] = useState("")
	const [repeatPassword, setRepeatPassword] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if(password !== repeatPassword) {
			setErrorMessage("Passwords diferentes. Por favor, digite de novo.");
			return;
		}

	}

	return (
		<div id='reset-password'>
			<MainHeader />

			<main>
				<form className='reset-password-form' onSubmit={handleSubmit}>
					<legend>Redefinição de senha</legend>

					<span>
						Escolha uma nova senha  para você acessar o dashboard do Happy
					</span>

					<div className='input-block'>
						<label htmlFor='password'>Nova senha</label>
						<input
							type='password'
							required
							value={password}
							onChange={(event) => {
								setPassword(event.target.value)
							}}
						/>
					</div>

                    <div className='input-block'>
						<label htmlFor='repeatPassword'>Repetir senha</label>
						<input
							type='password'
							required
							value={repeatPassword}
							onChange={(event) => {
								setRepeatPassword(event.target.value)
							}}
						/>
					</div>
				{errorMessage && (
					<div className="error-message">
						<p>{errorMessage}</p>
					</div>
				)}

					<button type='submit' className='login-button'>
						Entrar
					</button>
				</form>
			</main>
		</div>
	)
}
