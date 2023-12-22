import Link from 'next/link'
import { 
    Box,
    Container,
    Grid,
    Typography,
    styled
} from '@mui/material'

const StyledContainer = styled(Container)(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,  
    marginTop: theme.spacing(8),  
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    // como se fosse um media queries, com break point no sm
    [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    }
}))

const Footer = () => {

  return (
    <StyledContainer maxWidth="lg" component="footer">
        <Grid container spacing={3} justify="space-around">
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link href="#" passHref style={{ textDecoration: 'none' }}>
                        <Typography color="textSecondary" variant="subtitle1">Ajuda e Contato</Typography>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link href="#" passHref style={{ textDecoration: 'none' }}>
                        <Typography color="textSecondary" variant="subtitle1">Dicas de segurança</Typography>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link href="/user/publish" passHref style={{ textDecoration: 'none' }}>
                        <Typography color="textSecondary" variant="subtitle1">Anunciar e Vender</Typography>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                    <Link href="#" passHref style={{ textDecoration: 'none' }}>
                        <Typography color="textSecondary" variant="subtitle1">Plano profissional</Typography>
                    </Link>
                </Box>
            </Grid>
        </Grid>
    </StyledContainer>
  )
}

export default Footer