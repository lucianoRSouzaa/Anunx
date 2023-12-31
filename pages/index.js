import Link from 'next/link'
import slugify from 'slugify'
import { useRouter } from 'next/router'
import {
    Container,
    Grid,
    Paper,
    Typography,
    styled,
} from '@mui/material'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'
import dbConnect from '@/src/utils/dbConnect'
import ProductsModel from '@/src/models/products'
import { formatCurrency } from '@/src/utils/currency'
import SearchBar from '@/src/components/SearchBar'

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
    const router = useRouter()

    const handleSubmitSearch = search => {
        router.push({
            pathname: `/search/${search}`,
        })
    }

    return (
        <TemplateDefault>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" sx={{ fontSize: '3em' }} color="textPrimary">
                        O que deseja encontrar?
                    </Typography>
                    <StyledBoxSearch>
                        <SearchBar handleSubmitSearch={handleSubmitSearch} />
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
                                const productSlug = slugify(product.title).toLowerCase()
                                
                                return (
                                    <Grid key={product._id} item xs={12} sm={6} md={4}>
                                        <Link href={`/${product.categoryDetails.slug}/${productSlug}/${product._id}`} style={{ textDecoration: 'none' }} passHref>
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

const getLatestProducts = async (limit) => {
    const pipeline = [
        { $sort: { createdAt: -1 } }, 
        { $limit: limit }, 
        {
            $lookup: {
                from: 'categories',
                localField: 'category',
                foreignField: '_id',
                as: 'categoryDetails',
            },
        },
        { $unwind: '$categoryDetails' },
        {
            $project: {
                _id: 1,
                title: 1,
                price: 1,
                files: 1,
                'categoryDetails.slug': 1,
            },
        },
    ]

    const latestProducts = await ProductsModel.aggregate(pipeline).exec()

    return latestProducts
}

export async function getServerSideProps() {
    await dbConnect()

    const latestProducts = await getLatestProducts(6)

    return {
        props: {
            products: JSON.parse(JSON.stringify(latestProducts))
        }
    }
}

export default Home