import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
//const mongodb= require('mongodb');
//const client= new mongodb.MongoClient();

let meme
export default class AnalysisDAO {

  static async injectDB(conn) {
    if(meme) {
      return
    } try {
      meme = await conn.db(process.env.MEMES).collection('memes')
    } catch(e) {
      console.error(`unable to establish connection handle in AnalysisDAO: ${e}`)
    }
  }

  static async addAnalysis(memeID, user, analysis, date) {
    try {
      const reviewDoc = {
        name: user.name,
        memeID: user._id,
        date: date,
        analysis: analysis,
        memeID: new ObjectId(memeID)
      }
      return await reviews.insertOne(AnalysisDoc)
    } catch(e) {
      console.error(`unable to post analysis: ${e}`)
      console.error(e)
      return { error: e }
    }
  }

  static async deleteAnalysis(analsyis_id, memeID) {
    try {
      const deleteResponse = await reviews.deleteOne({
        _id: new ObjectId(analsyis_id),
        user_id: memeID,
      })
      return deleteResponse
    } catch(e) {
      console.error(`unable to delete review: ${e}`)
      console.error(e)
      return { error: e.message }
    }
  }
  
}