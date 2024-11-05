import {z} from 'zod'
import {Hono} from "hono"
import {zValidator} from "@hono/zod-validator";
import {loginSchema, registerSchema} from "@/features/auth/schemas";


const app = new Hono()
    .post(
        "/login",
        zValidator("json", loginSchema) ,async (c) => {
            const {email, password} = await c.req.valid("json");

            console.log("sign-in obj-----", {email, password})

            return c.json({email, password});
    }).post(
        "/register",
        zValidator("json", registerSchema), async (c) => {
            const {name, email, password} = c.req.valid("json")

            console.log("sign-up obj------", {name,email, password })

            return c.json({name, email, password})
        }
    )

export default app
