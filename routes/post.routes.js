const Router = require('express')
const router = new Router
const PostController = require('../controller/cup.controller')

router.post('/cups', PostController.createCup)
router.get('/cups', PostController.getAllCups)
router.get('/cups/:id', PostController.getCupById)
router.delete('/cups/:id', PostController.deleteCup)
router.put('/cups/:id', PostController.updateCup)

module.exports = router