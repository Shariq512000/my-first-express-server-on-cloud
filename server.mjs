console.log("hello world")

import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("request ip:", req.ip)
  res.send('Hello World!' + new Date().toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})