import express from 'express'
import {client, initRedis} from './redis.js'

initRedis()
const app = express()
app.use(express.json())

const sleep = async (ms) => (
  await new Promise(r => setTimeout(() => r(), ms))
) 

app.get('/json',async (req, res) => {
  const {id} = req.query
  if(!id){
    return res.end()
  }

  const cachedValue = await client.get(`user_${id}`)
  if(cachedValue){
    return res.json({
      user: `user #${cachedValue}`
    }).end()
  }

  await client.set(`user_${id}`, id)
  await sleep(1000)
  
  res.json({
    user: `user #${id}`
  }).end()
})

app.listen(3000, () => console.log('㊋ server was running in http://localhost:3000'))