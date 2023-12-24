import dbConnect from "@/src/utils/dbConnect"
import { crypto } from "@/src/utils/password"
import UsersModel from "@/src/models/users"



const post = async (req, res) => {
    const {
        name,
        email,
        password,
    } = req.body
    
    await dbConnect()
    
    const passwordCrypto = await crypto(password)
    
    const user = new UsersModel({
        name,
        email,
        password: passwordCrypto,
    })
    
    user.save()
    
    res.status(201).json({ success: true })
}

export {
    post,
}