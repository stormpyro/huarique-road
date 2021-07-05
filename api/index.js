import express from "express"
import morgan from "morgan"
import cors from "cors"
import { Router } from "express"
const app = express()
const router = Router()

router.get('/health', (req,res) => {
    res.send('I am alive!')
})

router.post('/auth', (req,res) => {
    try {
        const {email, password} = req.body
        if(email && password) {
            res.status(200).json({
                userLogged: true,
                email,
                date: new Date()
            })
        } else {
            throw Error("Faltan datos")
        }  
    } catch (error) {
        res.status(400)
        .json({ errorMessage: "Llena tus datos correctamente", error})
    } finally {
        res.end()
    }
})

// middlewares
app.use(morgan('combined'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use(router);

// bad route
app.get("*", (req, res) => {
  res.end("Invallid Route");
});



export default app