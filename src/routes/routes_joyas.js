import { Router } from 'express'
import { getAllJoyas } from '../controllers/controller_joyas.js'


const router = Router()

//Ruta GET
router.get('/joyas', getAllJoyas) 


export default router