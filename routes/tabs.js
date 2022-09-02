const express = require('express')
const router = express.Router()
const tabsController = require('../controllers/tabs') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, tabsController.getTabs)

router.post('/createTab', tabsController.createTab)

router.put('/markComplete', tabsController.markComplete)

router.put('/markIncomplete', tabsController.markIncomplete)

router.delete('/deleteTab', tabsController.deleteTab)

module.exports = router