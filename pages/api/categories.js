import { createRouter } from "next-connect"
import categories from '@/src/models/categories';
import dbConnect from "@/src/utils/dbConnect";
import slugify from 'slugify'

const router = createRouter()

router.get(async (req, res) => {
    await dbConnect()

    const categoty = await categories.find({})
    
    res.status(200).json({ categoty })
})

router.post(async (req, res) => {
    await dbConnect()
    const { name } = req.body
    const slug = slugify(name).toLowerCase()
    const category = new categories({ 
        name,
        slug
    })

    await category.save()
    res.status(200).json({ success: true })
})

export default router.handler()