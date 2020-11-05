import { NextFunction, Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'

import User from '../models/User'

const saltRounds = 10

export default {
	async create(req: Request, res: Response) {
		const { name, email, password } = req.body

		const usersRepository = getRepository(User)
		const hashedPassword = bcrypt.hashSync(password, saltRounds)

		const user = usersRepository.create({
			name,
			email,
			password: hashedPassword,
		})

		await usersRepository.save(user)

		return res.status(201).json(user)
	},

	async signin(req: Request, res: Response, next: NextFunction) {
		const { email, password } = req.body
		const usersRepository = getRepository(User)
		const user = await usersRepository.findOneOrFail({ email })

		if (bcrypt.compareSync(password, user.password)) {
			return res.status(200).json({
				token: jwt.sign(
					{
						email: user.email,
						id: user.id,
						name: user.name,
					},
					String(process.env.JWT_TOKEN),
					{
						expiresIn: 86400,
					}
				),
			})
		}

		return res.status(401).json({})
	},
}
