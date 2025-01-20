import { Router } from "express";
import { formulario } from "./products.controller.js";

const router = Router()

router.get("/form", formulario)

export default router