import { createRouter } from "next-connect"
import { post } from "@/src/controllers/products"

const router = createRouter()

router.post(post)

export default router.handler()

export const config = {
    api: {
        bodyParser: false
    }
}