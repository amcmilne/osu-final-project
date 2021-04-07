const router = require("express").Router()
const materialsController = require("../../controllers/materials")

router.route("/")
    .get(materialsController.findAll)
    .post(materialsController.create)

router.route("/:id")
    .get(materialsController.findById)
    .delete(materialsController.destroy)

module.exports = router 