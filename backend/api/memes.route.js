import express from 'express'

import MemesController from './memes.controller.js'
import AnalysisController from './analysis.controller.js'
const router = express.Router()

/**
 * @swagger
 * /api/v1/memes:
 *   get:
 *     summary: Retrieve a list of memes.
 *     description: Retrieve a list of memes from MongoDB database.
 *     tags: [memes]
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page number to return for pagination.
 *         required: false
 *         schema:
 *           type: integer
 *           maximum: 9999
 *           format: int32
 *     responses:
 *       200:
 *         description: A list of memes.
 */

router.route('/').get(MemesController.apiGetMemes)

router 
.route("/analyis")
.post(AnalysisController.apiAnalysisPost)
.put(AnalysisController.apiUpdateAnalysis)
.delete(AnalysisController.apiDeleteAnalysis)
router.route('/').get((req,res)=>
res.send('hello world'))

router.route("/id/:id").get(MemesController.apiGetMemes)

export default router