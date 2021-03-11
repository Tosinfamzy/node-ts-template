import {Router} from 'express'

import {createEntity, getEntity, updateEntity} from '../controllers/base'
 const router = Router()

 router.post('/', createEntity)
 router.get('/', getEntity)
 router.patch('/:id', updateEntity)

 export default router   