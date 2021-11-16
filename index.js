const express = require('express')
const path = require('path')
const app = express()
const members = require('./data/members')


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'data')))

var artist = members.artist
console.log(artist[1].name)

app.get('/api/artist', (req, res)=>{
  const artist = members.artist
    let data = " "
    for(let i = 0; i< artist.length; i++){

        data += `<h4>${artist[i].name}</h4>`
    }
        res.send(data)    
})

app.get('/api/justin/', (req, res)=>{
    const offMyFace = members.offMyFace[0].tracks
    let arr = ""
    for(let i = 0; i < offMyFace.length; i++){
        arr += `<h4>${offMyFace[i]}<h4/>`
    }
    res.send(arr);
})



const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`running in port http://localhost:${PORT}/`);
})