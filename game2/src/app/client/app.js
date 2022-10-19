import * as Entity from '../components/content/Entitys.js'
import express from 'express'
import MainPage from '../components/pages/main.js'

const app = express()

app.get('/', function (req, res) {
  res.send( 
    MainPage(
      `Staty: ATK: ${Entity.player.ATK}, DEF: ${Entity.player.DEF}, HP: ${Entity.player.HP}, MOC: ${Entity.player.MOC}`,
      `Broń: Dodatkowe obr - ${Entity.player.Item.ATK}, Opis - ${Entity.player.Item.opis}`
    )    
  )
})

app.get('/xxx', function (req, res) {
  res.send("xxx")
})

app.listen(3000)