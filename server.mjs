import path from 'path';
import express from 'express';

const __dirname = path.resolve()
const app = express()
const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     console.log("request ip:", req.ip)
//   res.send('Hello World!' + new Date().toString())
// })

app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})