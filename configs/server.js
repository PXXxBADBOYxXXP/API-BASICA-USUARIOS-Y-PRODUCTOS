`use strict`

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import  userRoutes from "../users/user.routes.js"
import productsRoutes from "../products/products.routes.js"

const routes = (app) =>{
    app.use("/users", userRoutes)
}

const routesp = (app) =>{
    app.use("/products", productsRoutes)
}

const configs = (app) => {
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
}

export const initServer = () => {
    const app = express()
    try{
        configs(app)
        routes(app)
        routesp(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port${process.env.PORT}`)
    }catch(e){
        console.log(`Server init failed: ${e}`)
    }
}