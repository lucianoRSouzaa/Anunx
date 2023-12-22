import { 
  Container,
  Typography,
  Button,
  styled,
  Grid,
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'


const StyledButtonAdd = styled(Button)(() => ({
  margin: '30px auto',
  display: 'block',
}))

export default function Home() {
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
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
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
          <Grid item xs={12} sm={6} md={4}>
            <Card
              image={'https://source.unsplash.com/random'}
              title="Produto X"
              subtitle="R$ 60,00"
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
          <Grid item xs={12} sm={6} md={4}>
            <Card
                image={'https://source.unsplash.com/random'}
                title="Produto X"
                subtitle="R$ 60,00"
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
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
