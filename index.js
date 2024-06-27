import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import errorHandler from './src/middleware/errorHandler.js'
import postsRouter from './src/routes/routes_joyas.js'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3000

//Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use('/', postsRouter)


//Ruta de prueba
app.get('/test', (req, res) => {
    res.json({message: 'ruta de prueba habilitada'})
})


// Middleware de manejo de errores
app.use(errorHandler)


//Puerto de escucha
app.listen(PORT, () => {
    console.log(`Server run on http://localhost:${PORT}`)
})