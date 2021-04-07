const router = require("express").Router()
const ordersController = require("../../controllers/orders")

router.route("/")
    .get(ordersController.findAll)
    .post(ordersController.create)

router.route("/:id")
    .get(ordersController.findById)
    .delete(ordersController.destroy)

module.exports = router