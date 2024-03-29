import express from 'express'
import * as dotnev from 'dotenv'
import { OpenAI} from 'openai'

dotnev.config()

const router = express.Router()

const config = ({apiKey: process.env.OPENAI_API_KEY})

const openai = new OpenAI(config)

router.route('/').get((req,res) => {
    res.send('Hello from DALL-E')
})

router.route('/').post(async (req,res) => {
    try {
        const {prompt} = req.body
        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })

        const image = aiResponse.data.data[0].b64_json

        res.status(200).json({ phot: image})
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

export default router