import { Router } from 'express'
import { getAllJoyas, getAllJoyasHateoas, getAllJoyasLimit } from '../controllers/controller_joyas.js'


const router = Router()

//Ruta GET de prueba
/* router.get('/joyas', getAllJoyas)  */

//Ruta GET con limit
/* router.get('/joyas', getAllJoyasLimit) */

//Ruta GET with HATEOAS
router.get('/joyas', getAllJoyasHateoas)


export default router