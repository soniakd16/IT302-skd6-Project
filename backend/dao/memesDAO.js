let memes

export default class memesDAO{
    static async injectDB(conn) {
        if(memes){
            return
        } try {
            memes=await
            conn.db(process.env.MEMES).collection('memes')

        } catch(e){
            console.error('unable to connect in MemesDAO: ${e}')
        }
    }

    static async getMemes({
        filters = null,
        page=0,
        Memesperpage=20,

 }= {}) {

    let query
    if(filters) {
        if("name" in filters) {
            query= {$text: { $search: filters['name']}}
        } else if("rated" in filters) {
            query = { "rated": {$eq: filters['rated']}}
        }
    }

    let cursor
    try {
        cursor = await memes
        .find(query)
        .limit(Memesperpage)
        .skip(Memesperpage * memes)
    const MemesList = await cursor.toArray()
    const totalMemes = await memes.countDocuments(query)
    return {MemesList, totalMemes}
    } catch(e){
        console.error('Unable to issue find command, ${e}')
        console.error(e)
        return { MemesList: [], totalMemes: 0
        }
    }
}

}
