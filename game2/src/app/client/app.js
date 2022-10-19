import { player } from '../components/content/Entitys.js'
import express from 'express'

const app = express()

app.get('/', function (req, res) {
  res.send(
    `Nick: ${player.nick}`
  )
})

app.listen(3000)