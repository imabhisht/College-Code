const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://admin:admin@cluster1.nqvqztn.mongodb.net?retryWrites=true&writeConcern=majority";


const client = new MongoClient(uri);

const add_data = async(data) => {
    try {
        await client.connect();

        const db = client.db("College");
        const collection = db.collection("test");

        const result = await collection.insertOne(data);

        console.log(`Data inserted with id: ${result.insertedId}`);

        return result;

    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        await client.close();
    }
} 


module.exports = add_data;