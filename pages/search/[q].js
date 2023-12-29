import Link from 'next/link'
import slugify from 'slugify'
import {
    Container,
    Typography,
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
import ProductsModel from '@/src/models/products'
import { formatCurrency } from '@/src/utils/currency'

const StylePaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    marginBottom: 20,
}))

const List = ({ products, query }) => {
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
                    <StyledBox shadow>
                        <Typography component="h6" variant="h6">
                            Anúncios
                        </Typography>
                        <Typography component="span" variant="subtitle2">
                            ENCONTRADOS {products.length} ANÚNCIOS PARA O TERMO: "{query}"
                        </Typography>

                        <br /><br />

                        <Grid container spacing={4}>
                            {
                                products.map(product => {
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
                    </StyledBox>
                </Grid>

            </Container>
        </TemplateDefault>
    )
}

export async function getServerSideProps({ query }) {
    const { q } = query
  
    const products = await ProductsModel.find({
        $or: [
            { 
                title: { 
                    $regex: q,
                    $options: 'i'
                } 
            },
            { 
                description: { 
                    $regex: q,
                    $options: 'i'
                } 
            },
        ]
    })
  
    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
            query: q
        }
    }
}

export default List