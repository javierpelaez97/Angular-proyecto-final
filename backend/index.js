const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRoutes = require("./routes/user.routes")
const filmRoutes = require("./routes/film.routes")


const app = express()

app.use(cors())

app.use(express.json())


mongoose.connect("mongodb+srv://javierpelaezgimenez:a8y3JN27xCWoctqd@principal.78j1y.mongodb.net/?retryWrites=true&w=majority&appName=Principal")
.then(()=>{
    console.log(`Conexion con base de datos exitosa`)
})
.catch((err)=>{
    console.log(`Error al conectar con la base de datos: ${err}`)
})

app.use("/api/users",userRoutes)
app.use("/api/films",filmRoutes)

app.listen(3000, ()=>{
    console.log(`API funcionado... en puerto 3000`)
})