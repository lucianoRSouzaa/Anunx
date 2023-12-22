import { 
  Container,
  Typography,
  Button,
  styled,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'


const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0, 6),
}))
const StyledButtonAdd = styled(Button)(() => ({
  margin: '30px auto',
  display: 'block',
}))
const StyledCardMedia = styled(CardMedia)(() => ({
  paddingTop: '56%',
}))

export default function Home() {
  return (
    <TemplateDefault>
      <StyledContainer maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" sx={{ fontSize: '3.3em' }}>
            Meus Anúncios
        </Typography>
        <StyledButtonAdd variant="contained" color="primary">
          Publicar novo anúncio
        </StyledButtonAdd>
      </StyledContainer>
      <Container maxWidth="lg">
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
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
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
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
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
              <CardActions>
                <Button size="small" color="primary">
                  Editar
                </Button>
                <Button size="small" color="primary">
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
