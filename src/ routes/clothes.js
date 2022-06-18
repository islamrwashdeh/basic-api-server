"use strict";
const express = require("express");

const {clothes, clothes} = require("../models/index");


const clothesRouter = express.Router();

//add routes
clothesRouter.get("/clothes", getClothes);
clothesRouter.get("/clothes/:id", getOneClothes);
clothesRouter.post("/clothes", createClothes);
clothesRouter.put("/clothes/:id", updateClothes);
clothesRouter.delete("/clothes/:id", deleteClothes);
// to add functionality we need to add
async function getClothes (req, res) {

    const allFood = await food.findAll();
    res.status(200).json(allclothes);
}
//if we want to find one

async function getOneClothes(req, res) {
    
    const clothesId = parseInt(req.params.id);

    let clothes = await clothes.findOne({ where: { id: clothesId } });
    res.status(200).json(clothes);
}

async function createClothes(req, res) {
    
    let newclothes = req.body;
    let clothes = await People.create(newclothes);
    res.status(201).json(clothes);
}

async function updateClothes(req, res) {
   
    let clothesId = parseInt(req.params.id);
    let updateClothes = req.body; 
    
    let foundClothes = await People.findOne({ where: { id: foodId } });
    if (foundClothes) {

        let updatedClothes = await foundClothes.update(updateFood);
        res.status(201).json(updatedClothes);
    } else {

        res.status(404);
    }
}
async function deleteClothes(req, res) {
  
    let clothesId = parseInt(req.params.id);
    let deleteClothes = await People.destroy({ where: { id: clothesId } });

   

    res.status(204).json(deleteClothes); 
}
module.exports = clothesRouter;