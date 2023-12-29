import Link from 'next/link'
import slugify from 'slugify'
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
import dbConnect from '@/src/utils/dbConnect'
import ProductsModel from '@/src/models/products'
import { formatCurrency } from '@/src/utils/currency'

const StyledContainerCards = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(5),
}))
const StyledBoxSearch = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 20,
}))

const Home = ({ products }) => {
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
                        {
                            products.map(product => {
                                // .toLowerCase() nativo do JS
                                const categorySlug = slugify(product.category).toLowerCase()
                                const productSlug = slugify(product.title).toLowerCase()
                                
                                return (
                                    <Grid key={product._id} item xs={12} sm={6} md={4}>
                                        <Link href={`/${categorySlug}/${productSlug}/${product._id}`} style={{ textDecoration: 'none' }} passHref>
                                            <Card
                                                image={`/uploads/${product.files[0].name}`}
                                                title={product.title}
                                                subtitle={formatCurrency(product.price)}
                                            />
                                        </Link>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </StyledContainerCards>
        </TemplateDefault>
    )
}

export async function getServerSideProps() {
    await dbConnect()

    const products = await ProductsModel.aggregate([{
        $sample: { size: 6 }
    }])

    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}

export default Home