import {
    Container,
    Typography,
    Box,
    Grid,
    IconButton,
    Paper,
    InputBase,
    styled
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import StyledBox from '@/src/components/StyledBox'

const StylePaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    marginBottom: 20,
}))

const List = () => {
    return (
        <TemplateDefault>
            <Container maxWidth="lg">

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <StylePaper component="form">
                            <InputBase 
                                placeholder="Ex: iPhone 12 com garantia"
                                fullWidth
                            />
                            <IconButton type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </StylePaper>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <StyledBox>
                        <Typography component="h6" variant="h6">
                            Anúncios
                        </Typography>
                        <Typography component="span" variant="subtitle2">
                            ENCONTRADOS 200 ANÚNCIOS
                        </Typography>

                        <br /><br />

                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image="https://source.unsplash.com/random"
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image="https://source.unsplash.com/random"
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card 
                                    image="https://source.unsplash.com/random"
                                    title="Produto X"
                                    subtitle="R$ 60,00"
                                />
                            </Grid>
                        </Grid>
                    </StyledBox>
                </Grid>

            </Container>
        </TemplateDefault>
    )
}

export default List