import pool from "../../database/config.js"
import format from 'pg-format'

//Obtener todas las joyas
/* export const getAllJoyas_model = async () => {
    const allJoyas = await pool.query('SELECT * FROM inventario')
    console.table(allJoyas.rows)
    return allJoyas.rows
} */

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
    console.table(result.rows)
    return result.rows;
};

//Obtener todas las joyas con límite
/* export const allJoyasModelLimit = async (limit = 4) => {
    const allJoyas = await pool.query('SELECT * FROM inventario ORDER BY id ASC LIMIT $1', [limit])
    console.table(allJoyas.rows)
    return allJoyas.rows
} */

//Obtener joyas con HATEOAS y filtros
export const getAllJoyasModelWithHateoas = async ({ limits = 10, order_by = "id_ASC", page = 1 } = {}) => {
    const [campo, direccion] = order_by.split("_")
    const offset = Math.abs((page - 1) * limits)
    const { rows: [{ count: cantidad }] } = await pool.query('SELECT COUNT(*) FROM inventario');
    const formattedQuery = format('SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s', campo, direccion, limits, offset)
    const { rows: joyas } = await pool.query(formattedQuery)
    const paginas = Math.ceil(cantidad / limits)
    return { joyas, paginas, cantidad }
}