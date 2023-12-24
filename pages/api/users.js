import { createRouter } from "next-connect"
import { get, post } from "@/src/controllers/users"

const router = createRouter()

router.get(get)

router.post(post)

export default router.handler()