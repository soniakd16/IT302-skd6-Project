import memesDAO from "../dao/memesDAO.js"

export default class ReviewsController {

    static async apiAnalysisPost(req,res,next) {
      try {
        const movieId = req.body.memes_id
        const analsyis = req.body.analsyis
        const userInfo = {
          name: req.body.name,
          _id: req.body.user_id
        }
  
        const date = new Date()
  
        const AnalysisResponse = await memesDAO.addAnalysis(
          memes_id,
          userInfo,
          analsyis,
          date
        )
      res.json(AnalysisResponse)
      } catch(e) {
      res.status(500).json({ error: e.message })
      }
    }

    static async apiUpdateAnalysis(req,res,next) {
        try {
          const memes_id = req.body.analsyis_id
          const analsyis = req.body.analysis
          const date = new Date()
          const ReviewResponse = await AnalysisDAO.UpdateAnalysis(
            analsyis_id,
            req.body.analysis_id,
            analsyis,
            date
          )
      
          var { error } = AnalysisResponse
          if(error) {
            res.status.json({error})
          }
          if(AnalysisResponse.modifiedCount === 0) {
            throw new Error ("unable to update anaalysis. User may not be original poster")
          }
          res.json(AnalysisResponse)
        } catch(e) {
          res.status(500).json({ error: e.message})
        }
      }

    static async apiDeleteAnalysis(req,res,next) {
        try {
          const memes_id = req.body.analysis_id
          const analsyis_id = req.body.analysis_id
          const AnalysisResponse = await AnalysisDAO.DeleteAnalysis(
            analsyis_id,
            userId,
          )
          res.json(AnalysisResponse)
        } catch(e) {
          res.status(500).json({ error: e.message})
        }
      }
  }