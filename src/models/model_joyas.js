import pool from "../../database/config.js"

//Obtener todas las joyas
export const getAllJoyas_model = async () => {
    const allJoyas = await pool.query('SELECT * FROM inventario')
    /* console.table(allJoyas.rows) */
    return allJoyas.rows
}

//Filtros y paginado

export const getJoyasPorFiltros = async (precio_min, precio_max, categoria, metal) => {
    let query = 'SELECT * FROM inventario WHERE 1=1';
    const values = [];
    if (precio_min) {
        values.push(precio_min);
        query += ` AND precio >= $${values.length}`;
    }
    if (precio_max) {
        values.push(precio_max);
        query += ` AND precio <= $${values.length}`;
    }
    if (categoria) {
        values.push(categoria);
        query += ` AND categoria = $${values.length}`;
    }
    if (metal) {
        values.push(metal);
        query += ` AND metal = $${values.length}`;
    }
    const result = await pool.query(query, values);
    return result.rows;
};

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