const db = require("../db-config/db-config")



const getProductDetails = async (req, res, next) => {
    

    let { page, size, orderBy, orderType, search } = req.query;
    let searchMany = req.body.searchMany
    let pageSize = page || 10
    let currentPage = size || 1
    let order = orderBy || 'createdAt'
    let orderDir = orderType || 'desc'
    let searchBy = search
    let searchFields = searchMany

    const offset = (currentPage-1)*pageSize

    try {
        let productQuery = `SELECT * FROM Products `

        if (searchBy) {
            productQuery = productQuery + `WHERE productId = ${searchBy}`
        }
        if (searchFields) {
            productQuery = productQuery + `where productName IN ${searchFields}`
        }

        if(page && size){
            productQuery = productQuery +` ORDER BY ${order} ${orderDir} limit ? offset ?`
        }
        
        let [result] = await db.execute(productQuery,[currentPage,offset])
        res.json(result)

    } catch (err) {
        console.log(err);


    }
}

module.exports = {getProductDetails};



