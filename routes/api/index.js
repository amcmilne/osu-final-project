const router = require("express").Router()
const clientRoutes = require("./clients")
const materialRoutes = require("./materials")
const orderRoutes = require("./orders")
const paintRoutes = require("./paints")
const userRoutes = require("./users")

router.use("/clients", clientRoutes)
router.use("/materials", materialRoutes)
router.use("/orders", orderRoutes)
router.use("/paints", paintRoutes)
router.use("/users", userRoutes)

module.exports = router