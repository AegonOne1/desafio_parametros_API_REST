import pool from "../../database/config.js"

//Obtener todas las joyas
export const getAllJoyas_model = async () => {
    const sqlQuery = {text:'SELECT * FROM inventario'}
    try {
        const result = await pool.query(sqlQuery)
        console.table(result.rows)
        return result.rows
    } catch (error) {
        throw new Error('Error al obtener el listado de inventario: ' + error.message)

    }
}