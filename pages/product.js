import { 
    Container, 
    Grid,
    styled,
    Box,
    Typography,
    Chip,
    Card,
    CardHeader,
    Avatar,
    CardMedia,
} from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../src/templates/Default'

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
}))
const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
}))
const StyledProductName = styled(Typography)(() => ({
    margin: '12px 0',
}))
const StyledPrice = styled(Typography)(() => ({
    fontWeight: 'bold',
    marginBottom: 15,
}))

const Product = () => {
    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <StyledBox>
                            <Carousel
                                autoPlay={false}
                                animation="slide"
                                navButtonsAlwaysVisible
                                navButtonsProps={{                            
                                    style: {                      
                                        color: 'white'
                                    }
                                }}
                            >
                                <Card style={{ height: '100%' }}>
                                    <CardMedia 
                                        style={{ paddingTop: '56%' }}
                                        image="https://source.unsplash.com/random?a=1"
                                        title="Título da imagem"
                                    />
                                </Card>
                                <Card style={{ height: '100%' }}>
                                    <CardMedia 
                                        style={{ paddingTop: '56%' }}
                                        image="https://source.unsplash.com/random?a=2"
                                        title="Título da imagem"
                                    />
                                </Card>
                            </Carousel>
                        </StyledBox>

                        <StyledBox textAlign="left">
                            <Typography component="span" variant="caption">Publicado 16 de Junho de 2021</Typography>
                            <StyledProductName component="h4" variant="h4">Jaguar XE 2.0 Aut.</StyledProductName>
                            <StyledPrice component="h4" variant="h4">R$ 50.000,00</StyledPrice>
                            <Chip label="Categoria" />
                        </StyledBox>

                        <StyledBox textAlign="left">
                            <Typography component="h6" variant="h6">Descrição</Typography>
                            <Typography component="p" variant="body2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut vel eveniet corporis eaque facilis adipisci, numquam quia fuga, tenetur alias cumque cupiditate ea nulla! Placeat harum aperiam cumque dolor?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut vel eveniet corporis eaque facilis adipisci, numquam quia fuga, tenetur alias cumque cupiditate ea nulla! Placeat harum aperiam cumque dolor?
                            </Typography>
                        </StyledBox>
                    </Grid>

                    <Grid item xs={4}>
                        <StyledCard elevation={0}>
                            <CardHeader 
                                avatar={
                                    <Avatar>L</Avatar>
                                }
                                title="Luciano Souza"
                                subheader="lucianosouza@email.com"
                            />
                            <CardMedia 
                                image="https://source.unsplash.com/random"
                                title="Luciano Souza"
                            />
                        </StyledCard>

                        <StyledBox textAlign="left">
                            <Typography component="h6" variant="h6">Localização</Typography>
                        </StyledBox>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product