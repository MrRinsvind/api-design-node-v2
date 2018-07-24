import express from 'express'

// Declare an app from express

const app = express()

const apiRouter = express.Router()

apiRouter.get('/', (req,res)=>(
  res.json({api: true, apirouter: false})
))

app.use('/api', apiRouter)

app.all('*', (req,res)=>{
  res.json({ok:true})
})

export default app
