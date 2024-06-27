const HATEOAS = async (entidad, data) => {
    const results = data.map((item) => {
        return{
            name: item.nombre,
            links: [
                {
                    href: `http://localhost:3000/joyas/${entidad}/${item.id}`
                }
            ]
        }

    }).slice(0,4)
    const total = data.length
    const dataWithHateoas = {
        total,
        results,
    }
    console.table(dataWithHateoas)
    return dataWithHateoas
}

export default HATEOAS