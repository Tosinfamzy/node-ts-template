import {Router} from 'express'

import {createEntity, getEntity} from '../controllers/base'
 const router = Router()

 router.post('/', createEntity)
 router.get('/', getEntity)

 export default router   