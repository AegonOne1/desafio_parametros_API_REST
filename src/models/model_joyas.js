import pool from "../../database/config.js"

//Obtener todas las joyas
export const getAllJoyas_model = async () => {
    const allJoyas = await pool.query('SELECT * FROM inventario')
    /* console.table(allJoyas.rows) */
    return allJoyas.rows
}

//Filtros y paginado



//Obtener todas las joyas con límite
export const allJoyasModelLimit = async (limit = 4) => {
    const allJoyas = await pool.query('SELECT * FROM inventario ORDER BY id ASC LIMIT $1', [limit])
    /* console.table(allJoyas.rows) */
    return allJoyas.rows
}

//Modelo HATEOAS
export const getAllJoyasModelWithHateoas = async () => {
    const allJoyas = await pool.query('SELECT * FROM inventario')
    /* console.log(allJoyas.rows) */
    return allJoyas.rows
}