import { Request, Response } from 'express'

class User {
    public async index (req: Request, res: Response): Promise<Response> {
        return res.send('Hello')
    }
}

export default new User()