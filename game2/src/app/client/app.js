import * as S from '../components/content/Entitys.js'
import express from 'express'
import MainPage from '../components/pages/main.js'

const app = express()

app.get('/', function (req, res) {
  res.send( 
    MainPage(`Staty: ATK: ${S.player.ATK}, DEF: ${S.player.DEF}, HP: ${S.player.HP}, MOC: ${S.player.MOC}`)    
  )
})

app.get('/xxx', function (req, res) {
  res.send("xxx")
})

app.listen(3000)