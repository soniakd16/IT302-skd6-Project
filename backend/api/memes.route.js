import express from 'express'

import MemesController from './memes.controller.js'

const router = express.Router()

router.route('/').get(MemesController.apiGetMemes)

router.route('/').get((req,res)=>
res.send('hello world'))

export default router