import memesDAO from "../dao/memesDAO.js";
export default class MemesController {
    static async apiGetMemes(req,res,next) {
        const Memesperpage =
        req.query.Memesperpage ?
        parseInt(req.query.Memesperpage) :20
        const page = req.query.page ?
        parseInt(req.query.page) : 0
        let filters = {}
        if(req.query.rated){
            filters.rated=req.query.rated
        } else if(req.query.name){
            filters.name=req.query.title
        }

        const {memesList, totalMemes} = await memesDAO.getMemes({
            filters, page, Memesperpage
        })

        let response = {
            memes: memesList,
            page: page,
            filter: filters,
            entries_per_page: Memesperpage,
            total_results: totalMemes,
        }

        res.json(response)

        try {
            let title = req.params.title || {}
            let memes = await memesDAO.getMemes(title)
            if(!memes) {
                res.status(404).json({ error: "not found"})
                return
            }
            res.json(memes)
        } catch(e) {
            console.log('api, $(e)')
            res.status(500).json({error: e})
        }
            }
        }
