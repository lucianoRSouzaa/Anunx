import {
    Container,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography,
    styled,
    Card,
    CardContent,
    CardMedia,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import TemplateDefault from '../src/templates/Default'

const StyledContainerTitle = styled(Container)(({ theme }) => ({
    padding: theme.spacing(8, 10, 6),
}))
const StyledBoxSearch = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 20,
}))
const StyledCardMedia = styled(CardMedia)(() => ({
    paddingTop: '56%',
}))

const Home = () => {
    return (
        <TemplateDefault>
                <StyledContainerTitle maxWidth="md">
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
                </StyledContainerTitle>

                <Container maxWidth="md">
                    <Typography component="h2" variant="h4" align="center" color="textPrimary">
                        Destaques
                    </Typography>
                    <br />
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <StyledCardMedia 
                                    image={'https://source.unsplash.com/random'}
                                    title="Título da imagem"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Produto X
                                    </Typography>
                                    <Typography>
                                        R$ 60,00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <StyledCardMedia 
                                    image={'https://source.unsplash.com/random'}
                                    title="Título da imagem"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Produto X
                                    </Typography>
                                    <Typography>
                                        R$ 60,00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <StyledCardMedia 
                                    image={'https://source.unsplash.com/random'}
                                    title="Título da imagem"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Produto X
                                    </Typography>
                                    <Typography>
                                        R$ 60,00
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
        </TemplateDefault>
    )
}

export default Home