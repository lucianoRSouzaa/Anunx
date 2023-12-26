import { styled } from '@mui/system'
import { Box } from '@mui/material'

const BoxStyle = styled(Box)(({ theme, applymargin  }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: applymargin ? theme.spacing(4) : 0,
}))

const StyledBox = ({ children, shadow, applymargin }) => {
    
    return (
        <BoxStyle 
            applymargin={applymargin} 
            sx={shadow ? { boxShadow: 1 } : {}}
        >
            {children}
        </BoxStyle>
    )
}

export default StyledBox