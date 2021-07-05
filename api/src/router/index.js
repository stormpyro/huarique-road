import { Router } from "express"
const router = Router()

router.get('/health', (req,res) => {
    res.send('I am alive!')
})

router.post('/auth', (req,res) => {
    res.send('Auth service')
})

module.exports = router