import { useState } from 'react'
import axios from 'axios'
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
import AlertDialog from '@/src/components/AlertDialog'
import useToasty from '@/src/contexts/Toasty'
import Link from 'next/link'

const StyledButtonAdd = styled(Button)(() => ({
  margin: '30px auto',
  display: 'block',
}))

const Home = ({ products }) => {
  const { setToasty } = useToasty()

  const [openDialog, setOpenDialog] = useState(false)
  const [productIdToRemove, setProductIdToRemove] = useState(null)
  const [removedProducts, setRemovedProducts] = useState([])

  const handleCloseDialog = () => setOpenDialog(false)

  const handleClickOpenDialog = productId => {
    setOpenDialog(true)
    setProductIdToRemove(productId)
  }

  const handleConfirmRemove = () => {
    axios.delete('/api/products/delete', {
      data: {
        id: productIdToRemove
      }
    })
      .then(handleSuccess)
      .catch(handleError)
  }

  const handleSuccess = () => {    
    setOpenDialog(false)
    setRemovedProducts([ ...removedProducts, productIdToRemove ])

    setToasty({
      open: true,
      severity: 'success',
      text: 'Anúncio removido com sucesso!'
    })
  }

  const handleError = () => {
    setOpenDialog(false)
    setToasty({
      open: true,
      severity: 'error',
      text: 'Ops, ocorreu um erro!'
    })
  }

  return (
    <TemplateDefault>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" sx={{ fontSize: '3.3em' }}>
            Meus Anúncios
        </Typography>
        <Link href="/user/publish" passHref style={{ textDecoration: 'none' }}>
          <StyledButtonAdd variant="contained" color="primary">
            Publicar novo anúncio
          </StyledButtonAdd>
        </Link>
      </Container>
      <Container maxWidth="lg">

        {
          products.length === 0 && 
            <Typography component="div" variant="body1" align="center" color="textPrimary" gutterBottom>
              Nenhum anúncio publicado
            </Typography>
        }

        <Grid container spacing={4}>
          {
            products.map(product => {
              if(removedProducts.includes(product._id)) return null

              return (
                <Grid key={product._id} item xs={12} sm={6} md={4}>
                  <Card
                    image={`/uploads/${product.files[0].name}`}
                    title={product.title}
                    subtitle={formatCurrency(product.price)}
                    actions={
                      <>
                        <Button size="small" color="primary">
                          Editar
                        </Button>
                        <Button size="small" color="primary" onClick={() => handleClickOpenDialog(product._id)}>
                          Remover
                        </Button>
                      </>
                    }
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
      <AlertDialog 
        open={openDialog}
        handleClose={handleCloseDialog}
        handleConfirm={handleConfirmRemove}
        title="Tem certeza que deseja remover o anúncio?"
        message="Ao confirmar a operação, não poderá recuperar o anúncio."
        confirmMsg = "Remover"
        cancelMsg = "Cancelar"
      />
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