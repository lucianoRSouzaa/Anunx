import { 
    Container, 
    Grid,
    styled,
    Typography,
    Chip,
    Card,
    CardHeader,
    Avatar,
    CardMedia,
} from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import TemplateDefault from '../../../src/templates/Default'
import StyledBox from '@/src/components/StyledBox'
import dbConnect from '@/src/utils/dbConnect'
import ProductsModel from '@/src/models/products'
import { formatCurrency } from '@/src/utils/currency'

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

const Product = ({ product }) => {
    return (
        <TemplateDefault>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <StyledBox applymargin>
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
                                {
                                    product.files.map(file => (
                                        <Card key={file.name} style={{ height: '100%' }}>
                                        <CardMedia
                                            style={{ paddingTop: '56%' }}
                                            image={`/uploads/${file.name}`}
                                            title={product.title}
                                        />
                                        </Card>
                                    ))
                                }
                            </Carousel>
                        </StyledBox>

                        <StyledBox applymargin>
                            {/* TODO - criar data de criação */}
                            <Typography component="span" variant="caption">Publicado 16 de Junho de 2021</Typography>
                            <StyledProductName component="h4" variant="h4">{product.title}</StyledProductName>
                            <StyledPrice component="h4" variant="h4">{formatCurrency(product.price)}</StyledPrice>
                            <Chip label={product.category} />
                        </StyledBox>

                        <StyledBox>
                            <Typography component="h6" variant="h6">Descrição</Typography>
                            <Typography component="p" variant="body2">
                                {product.description}
                            </Typography>
                        </StyledBox>
                    </Grid>

                    <Grid item xs={4}>
                        <StyledCard elevation={0}>
                            <CardHeader 
                                avatar={
                                    <Avatar src={product.user.image}>
                                        {product.user.image !== "undefined" ? null : product.user.name[0]}
                                    </Avatar>
                                }
                                title={product.user.name}
                                subheader={product.user.email}
                            />
                            <CardMedia 
                                image={product.user.image}
                                title={product.user.name}
                            />
                        </StyledCard>

                        <StyledBox textAlign="left">
                            {/* TODO - criar localização */}
                            <Typography component="h6" variant="h6">Localização</Typography>
                        </StyledBox>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps({ query }) {
    const { id } = query
  
    await dbConnect()
  
    const product = await ProductsModel.findOne({ _id: id })
  
    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }    
    }
}

export default Product