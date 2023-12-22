import {
    Container,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography,
    styled,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'

const StyledContainerCards = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(5),
}))
const StyledBoxSearch = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 20,
}))

const Home = () => {
    return (
        <TemplateDefault>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" sx={{ fontSize: '3em' }} color="textPrimary">
                        O que deseja encontrar?
                    </Typography>
                    <StyledBoxSearch>
                        <InputBase
                            placeholder="Ex: iPhone 12"
                            fullWidth
                        />
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </StyledBoxSearch>
                </Container>

                <StyledContainerCards maxWidth="lg">
                    <Typography component="h2" variant="h4" align="center" color="textPrimary">
                        Destaques
                    </Typography>
                    <br />
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                image={'https://source.unsplash.com/random'}
                                title="Produto X"
                                subtitle="R$ 60,00"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                image={'https://source.unsplash.com/random'}
                                title="Produto X"
                                subtitle="R$ 60,00"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                image={'https://source.unsplash.com/random'}
                                title="Produto X"
                                subtitle="R$ 60,00"
                            />
                        </Grid>
                    </Grid>
                </StyledContainerCards>
        </TemplateDefault>
    )
}

export default Home