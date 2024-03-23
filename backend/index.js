import app from './server.js';
//import {urls} from './server.js';
import mongodb from "mongodb";
import dotenv from "dotenv";
//import dotenv from ".env";
//import ContentDAO from './dao/memesDAO.js';
import memesDAO from './dao/memesDAO.js';
import AnalysisDAO from './dao/analysisDAO.js'
async function main() {

    dotenv.config()

    const client = new mongodb.MongoClient(
        process.env.MEMES_URI)
    const port = process.env.PORT || 8000

    try {
        await client.connect()
        await memesDAO.injectDB(client)
        await AnalysisDAO.injectDB(client)
        app.listen (port, () => {
            console.log('server is running on port :' + port); })
         }
          catch (e) {
        console.error(e);
        process.exit(1)

    }
}
main().catch(console.error);
