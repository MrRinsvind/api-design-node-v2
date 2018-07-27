import express from 'express'
import { restRouter } from './api'
import { connect } from './db'
import setupMiddware from './middleware'
import { signin, protect } from './api/modules/auth'
// Declare an app from express

const app = express()

setupMiddware(app)
connect()

app.use('/signin', signin)
app.use('/api', protect, restRouter)

app.all('*', (req,res)=>{
  res.json({ok:true})
})

export default app
