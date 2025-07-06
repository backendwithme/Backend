// express use 
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/home', (req, res) => {
  res.send('wlecome to home page')
})

app.listen(3000)
