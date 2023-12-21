import {
    Container,
    Typography,
    styled,
    Box,
    Select,
    Button,  
    TextField,
    IconButton,
} from '@mui/material'

import TemplateDefault from '../../src/templates/Default'
import { DeleteForever } from '@mui/icons-material'

import style from './publish.module.css'

const StyledContainerTitle = styled(Container)(({ theme }) => ({
    padding: theme.spacing(8, 0, 6),
}))
const StyledContainerBox = styled(Container)(({ theme }) => ({
    paddingBottom: theme.spacing(3),
}))
const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(4),
}))
const StyledBoxThumbsContainer = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 15,
}))
const StyledBoxDropzone = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    width: 186,
    height: 137,
    margin: '0 15px 15px 0',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black',
    cursor: 'pointer',
}))

const Publish = () => {

    return (
        <TemplateDefault>
            <StyledContainerTitle maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado, melhor!
                </Typography>
            </StyledContainerTitle>
            <StyledContainerBox maxWidth="md">
                <StyledBox sx={{ boxShadow: 1 }}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Título do Anúncio
                    </Typography>
                    <TextField 
                        variant="standard"
                        label="Bicicleta para correr aro 18"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Categoria
                    </Typography>
                    <Select
                        variant="standard"
                        native
                        value=""
                        fullWidth
                        onChange={() => {}}      
                        inputProps={{
                            name: 'age',
                        }}                
                    >                        
                        <option value="">Selecione</option>
                        <option value="Bebê e Criança">Bebê e Criança</option>
                        <option value="Agricultura">Agricultura</option>
                        <option value="Moda">Moda</option>
                        <option value="Carros, Motos e Barcos">Carros, Motos e Barcos</option>
                        <option value="Serviços">Serviços</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Animais">Animais</option>
                        <option value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</option>
                        <option value="Imóveis">Imóveis</option>
                        <option value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</option>
                        <option value="Celulares e Tablets">Celulares e Tablets</option>
                        <option value="Esporte">Esporte</option>
                        <option value="Tecnologia">Tecnologia</option>
                        <option value="Emprego">Emprego</option>
                        <option value="Outros">Outros</option>
                    </Select>
                </StyledBox>
            </StyledContainerBox>

            <StyledContainerBox maxWidth="md">
                <StyledBox sx={{ boxShadow: 1 }}>
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Imagens
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        A primeira imagem é a foto principal do seu anúncio.
                    </Typography>
                    <StyledBoxThumbsContainer>
                        <StyledBoxDropzone>
                            <Typography variant="body2" color="textPrimary">
                                Clique para adicionar ou arraste a imagem para aqui.
                            </Typography>
                        </StyledBoxDropzone>
                        <Box
                            className={style.boxThumb}
                            style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}
                        >
                            <Box className={style.boxMainImage}>
                                <Typography variant="body2" color="secondary">
                                    Principal
                                </Typography>
                            </Box>
                            <Box className={style.boxThumbMask}>
                                <IconButton color="secondary">
                                    <DeleteForever fontSize="large" />
                                </IconButton>
                            </Box>
                        </Box>
                    </StyledBoxThumbsContainer>
                </StyledBox>
            </StyledContainerBox>

            <StyledContainerBox maxWidth="md">
                <StyledBox sx={{ boxShadow: 1 }}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Descrição
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        Escreva os detalhes do que está vendendo
                    </Typography>
                    <TextField 
                        multiline
                        variant="outlined"
                        rows={6}
                        fullWidth
                    />
                </StyledBox>
            </StyledContainerBox>

            <StyledContainerBox maxWidth="md">
                <StyledBox sx={{ boxShadow: 1 }}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Dados de contanto
                    </Typography>
                    <TextField 
                        label="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField 
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField 
                        label="Telefone"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </StyledBox>
            </StyledContainerBox>

            <StyledContainerBox maxWidth="md">
                <Box textAlign="right">
                    <Button variant="contained" color="primary">
                        Publicar Anúncio
                    </Button>
                </Box>
            </StyledContainerBox>
        </TemplateDefault>
    )
}

export default Publish