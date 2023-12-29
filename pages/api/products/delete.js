import { createRouter } from "next-connect"
import { remove } from '@/src/controllers/products'

const router = createRouter()

router.delete(remove)

export default router.handler()