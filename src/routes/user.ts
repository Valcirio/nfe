import user from '../controllers/user'
import { Router } from 'express'

const userRoutes = Router()

userRoutes.get('/', user.index)

export default userRoutes