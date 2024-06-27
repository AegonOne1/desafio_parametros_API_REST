import HATEOAS from "../middleware/hateoas.js"
import { getAllJoyas_model, allJoyasModelLimit, getAllJoyasModelWithHateoas } from "../models/model_joyas.js"


//GET
export const getAllJoyas = async (req, res, next) => {
    try {
        const joyas = await getAllJoyas_model()
        res.status(200).json({joyas: joyas})
    } catch (error) {
        next(error)
    }
}

//LIMIT
export const getAllJoyasLimit = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 4
        const result = await allJoyasModelLimit(limit)
        res.status(200).json({ joyas: result})
    } catch (error) {
        next(error) 
    }
}



//FILTROS Y PAGINADO





//HATEOAS
export const getAllJoyasHateoas = async (req, res, next) => {
    try {
        const allJoyas = await getAllJoyasModelWithHateoas()
        const getAllJoyasHateoas = await HATEOAS('joyas', allJoyas)
        res.status(200).json({joyas: getAllJoyasHateoas})
    } catch (error) {
        next(error)
    }
}
