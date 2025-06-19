import express from "express"
// const express = require("express")

const app = express()

app.get("/api/notes", (req, res) =>  {
    res.status(200).send("you got 20 notes");
});

app.post("./api/notes", (req,res) => {
    res.status(201).json({message:"post created successfully!"})
})

app.put("./api/notes/:id", (req,res) => {
    res.status(200).json({message:"post updated successfully!"})
})

app.put("./api/notes/:id", (req,res) => {
    res.status(202).json({message:"post deleted successfully!"})
})

http://localhost:5001/api/notes/212132


app.listen(5001, () => {
    console.log("Server started on PORT: 5001")
});