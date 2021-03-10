import express from 'express'

import baseRoutes from './routes/routes'

const app = express();
app.use('/', baseRoutes)

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction)=>{
    res.json({message: err.message})
})
app.listen(3000)