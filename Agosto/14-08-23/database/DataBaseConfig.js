import { MongoClient } from "mongodb"

function initializeDatabase() {
  const client = new MongoClient('mongodb+srv://anacleto:1234@bibliotecaarnia.ay7wfns.mongodb.net/')
  const collection = client.db("BibliotecaArnia").collection("Orders")

  return { collection, client }
}

export { initializeDatabase }