import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import triquiRoutes from './routes/triqui.routes'

const app = express()

app.set("port", process.env.PORT || 3000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.get('/', (req, res) => {
    res.json('welcome')
})

app.use('/triqui', triquiRoutes)

export default app