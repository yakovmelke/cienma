const express = require("express");
const route = express.Router();
const moviesBll = require("../BLL/moviesBll")

route.get("/",async (req,res)=>{
    try {
        const movies = await moviesBll.getALLMovies()
        res.status(200).json(movies)

    } catch (error) {
        res.status(500).json(error)
    }
})

route.get("/:id",async (req,res)=>{
    try {
        const { id } = req.params
        const movie = await moviesBll.getOneMovie(id)
        res.status(200).json(movie)

    } catch (error) {
        res.status(500).json(error)
    }
})
route.post("/",async (req,res)=>{
    try {
        const obj  = req.body
        const result = await moviesBll.createMovie(obj)
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json(error)
    }
})
route.put("/:id",async (req,res)=>{
    try {
        const { id } = req.params
        const obj  = req.body
        const result = await moviesBll.updateMovie(id,obj)
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json(error)
    }
})
route.delete("/:id",async (req,res)=>{
    try {
        const { id } = req.params
        const result = await moviesBll.deleteMovie(id)
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = route