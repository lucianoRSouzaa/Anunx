import { CircularProgress, Typography } from '@mui/material'
import style from './Loading.module.css'

const Loading = () => {

    return (
        <div className={style.divCenter}>
            <Typography className={style.textLoading} component="h1" variant="h2" color="textPrimary">
                Carregando...
            </Typography>
            <CircularProgress />
        </div>
    )
}

export default Loading