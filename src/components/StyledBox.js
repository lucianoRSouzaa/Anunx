import { styled } from '@mui/system'
import { Box } from '@mui/material'

const BoxStyle = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(3),
}))

const StyledBox = ({ children, shadow }) => {
    
    return (
        <BoxStyle sx={shadow ? { boxShadow: 1 } : {}}>
            {children}
        </BoxStyle>
    )
}

export default StyledBox