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

