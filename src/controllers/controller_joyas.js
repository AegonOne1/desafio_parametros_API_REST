import HATEOAS from "../middleware/hateoas.js"
import { getAllJoyasModelWithHateoas, getJoyasPorFiltros } from "../models/model_joyas.js"


/* //GET
export const getAllJoyas = async (req, res, next) => {
    try {
        const joyas = await getAllJoyas_model()
        res.status(200).json({joyas: joyas})
    } catch (error) {
        next(error)
    }
} */

/* //LIMIT
export const getAllJoyasLimit = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 4
        const result = await allJoyasModelLimit(limit)
        res.status(200).json({ joyas: result})
    } catch (error) {
        next(error) 
    }
} */



//FILTROS

export const getJoyasFiltros = async (req, res) => {
    try {
        const { precio_min, precio_max, categoria, metal } = req.query;
        const joyas = await getJoyasPorFiltros(precio_min, precio_max, categoria, metal);
        res.json({
            success: true,
            data: joyas,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



// HATEOAS
export const getAllJoyasHateoas = async (req, res, next) => {
    try {
        const { limits, order_by, page } = req.query
        const allJoyas = await getAllJoyasModelWithHateoas({ limits, order_by, page })
        const getAllJoyasHateoas = await HATEOAS('joyas', allJoyas.joyas)
        res.status(200).json({
            joyas: getAllJoyasHateoas,
            paginas: allJoyas.paginas,
            totalJoyas: allJoyas.cantidad
        })
    } catch (error) {
        next(error)
    }
}
