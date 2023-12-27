import { 
  Container,
  Typography,
  Button,
  styled,
  Grid,
} from '@mui/material'
import { getSession } from 'next-auth/react' 

import dbConnect from '@/src/utils/dbConnect'
import ProductsModel from '@/src/models/products'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { formatCurrency } from '../../src/utils/currency'

const StyledButtonAdd = styled(Button)(() => ({
  margin: '30px auto',
  display: 'block',
}))

const Home = ({ products }) => {

  console.log(products)

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" sx={{ fontSize: '3.3em' }}>
            Meus Anúncios
        </Typography>
        <StyledButtonAdd variant="contained" color="primary">
          Publicar novo anúncio
        </StyledButtonAdd>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {
            products.map(product => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={`/uploads/${product.files[0].name}`}
                  title={product.title}
                  subtitle={formatCurrency(product.price)}
                  actions={
                    <>
                      <Button size="small" color="primary">
                        Editar
                      </Button>
                      <Button size="small" color="primary">
                        Remover
                      </Button>
                    </>
                  }
                />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const userId = session.user.userId

  await dbConnect()

  const products = await ProductsModel.find({ 'user.id': userId })

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

Home.requireAuth = true

export default Home