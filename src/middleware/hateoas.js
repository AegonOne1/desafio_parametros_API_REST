const HATEOAS = async (entidad, data) => {
    const results = data.map((item) => {
        return{
            name: item.nombre,
            href: `/joyas/joya/${item.id}`
        }

    }).slice(0,4)

    const total = data.length
    const stockTotal = data.reduce((acc, item) => acc + item.stock, 0)

    const dataWithHateoas = {
        totalJoyas: total,
        stockTotal,
        results,
    }

    console.log(dataWithHateoas)
    return dataWithHateoas
}

export default HATEOAS