import { styled } from '@mui/system'
import { Box } from '@mui/material'

const BoxStyle = styled(Box)(({ theme, applyMargin  }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: applyMargin ? theme.spacing(4) : 0,
}))

const StyledBox = ({ children, shadow, applyMargin }) => {
    
    return (
        <BoxStyle 
            applyMargin={applyMargin} 
            sx={shadow ? { boxShadow: 1 } : {}}
        >
            {children}
        </BoxStyle>
    )
}

export default StyledBox