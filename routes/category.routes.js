/**
 * POST localhost:8080/ecomm/api/v1/categories
 */

const authMw = require("../middlewares/auth_mw")

category_controller = require("../controllers/category.controller")
auth_mw = require("../middlewares/auth_mw")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/categories",[auth_mw.verifyToken, authMw.isAdmin],category_controller.createNewCategory)
}