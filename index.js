const express = require('express')
const connecttodb = require('./db/connection')
const emprouting = require('./routes/emprouting')
const app = express()
const port = 8000
const uri = "mongodb+srv://sharma17h:7509359202@cluster0.icjntaq.mongodb.net/Human_Resource"

app.use("/",emprouting)
app.get('/', (req, res) => res.send('Hello World!'))

const DbConnect = async ()=> {
  try {
    await connecttodb(uri)
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  } catch (e) {
    console.log(e)
  }
}
DbConnect()

