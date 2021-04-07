const router = require("express").Router()
const usersController = require("../../controllers/users")

router.route("/")
    .get(usersController.findAll)
    .post(usersController.create)

router.route("/:id")
    .get(usersController.findById)
    .delete(usersController.destroy)

module.exports = router