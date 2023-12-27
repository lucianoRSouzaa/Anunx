import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google"

import dbConnect from '@/src/utils/dbConnect'
import UsersModel from "@/src/models/users"
import { compare } from '@/src/utils/password'

export default NextAuth({
    providers : [
        
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        CredentialsProvider({
            name : "Credentials",
            
            async authorize(credentials, req){
                await dbConnect()

                // check user existance
                const user = await UsersModel.findOne( { email : credentials.email})
                if(!user){
                    return null
                }

                // compare()
                const checkPassword = await compare(credentials.password, user.password)
                
                // incorrect password
                if(!checkPassword || user.email !== credentials.email){
                    return null
                }

                return user
            }
        })
    ],

    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async jwt ({token, user}) {
            if (user) {
                token.uid = user._id || user.id
            }
            return token
        },
        async session ({session, token}) {
            session.user.userId = token.uid
            return session
        }
    }
})