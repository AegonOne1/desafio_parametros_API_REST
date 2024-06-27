import { getAllJoyas_model } from "../models/model_joyas.js"


//GET
export const getAllJoyas = async (req, res, next) => {
    try {
        const joyas = await getAllJoyas_model()
        res.status(200).json({joyas: joyas})
    } catch (error) {
        next(error)
    }
}