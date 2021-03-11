import {RequestHandler} from 'express'

import {Entity} from '../models/entity'

const ENTITY: Entity[] = [];

export const createEntity:RequestHandler = (req, res, next) =>{
    const newEntity =  new Entity(Math.random().toString(), (req.body as {text:string}).text);
    ENTITY.push(newEntity);
    res.status(201).json({message: 'Created the Entity', createdEntity: newEntity})
}

export const getEntity:RequestHandler = (req,res,next)=>{
    res.json({entities:ENTITY})
}
 
export const updateEntity:RequestHandler<{id: string}>  = (req,res,next) =>{
    const entityId = req.params.id
    const updatedText = (req.body as {text: string}).text

    const index = ENTITY.findIndex(entity => entity.id === entityId)
    if (index < 0) {
        throw new Error("Could not find entity");
    
    }
    ENTITY[index] = new Entity(ENTITY[index].id, updatedText)
    res.json({message: 'Updated', updatedEntity: ENTITY[index]})
}