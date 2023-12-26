import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"
import Loading from './Loading'

const CheckAuth = ({ Component, pageProps }) => {
    const { status } = useSession()
    const router = useRouter()

    if (status === "loading") {
        return <Loading />
    }

    if (status === "unauthenticated") {
        router.push('/auth/signin')
        return <Loading />
    }

    return <Component {...pageProps} />
}

export default CheckAuth