import express from 'express'
import user from './routes/user'
// import users from '@/routes/users'
import cors from 'cors'

class App {
    public express: express.Application

    public constructor () {
        this.express = express()

        this.middleware()
        this.routes()
    }

    private middleware (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private routes (): void {
        this.express.use('/user', user)
        this.express.get('/', (req, res)=>{
            res.send('Hello World')
        })
    }
}

export default new App().express