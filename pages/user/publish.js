import { useState } from 'react'
import {
    Container,
    Typography,
    styled,
    Box,
    Select,
    Button,  
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    MenuItem,
    FormHelperText,
    Input,
} from '@mui/material'

import { useDropzone } from 'react-dropzone'
import { Formik } from 'formik'
import * as yup from 'yup'

import { DeleteForever } from '@mui/icons-material'

import TemplateDefault from '../../src/templates/Default'
import style from './publish.module.css'

const StyledContainerTitle = styled(Container)(({ theme }) => ({
    paddingBottom: theme.spacing(4),
}))
const StyledContainerBox = styled(Container)(({ theme }) => ({
    paddingBottom: theme.spacing(4),
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
const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    fontWeight: 400,
    color: theme.palette.primary.main,
}))

const validationSchema = yup.object().shape({
    title: yup.string()
        .min(3, 'Escreva um título maior')
        .max(100, 'Título muito grande')
        .required('Campo obrigatório'), 
    category: yup.string().required('Campo obrigatório'),
    description: yup.string()
        .min(50, 'Escreva uma descrição com pelo menos 50 caracteres.')    
        .required('Campo obrigatório'),
    price: yup.number().required('Campo obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    phone: yup.number().required('Campo obrigatório'),
    files: yup.array().min(1, 'Envie pelo menos uma foto').required('Campo obrigatório')
})

const Publish = () => {
    return (
        <TemplateDefault>

            <Formik 
                initialValues={{
                    title: '',
                    category: '',
                    description: '',
                    price: '',     
                    email: '',
                    name: '',
                    phone: '',
                    files: [],
                }}
                validationSchema={validationSchema}
                onSubmit={ values => {
                    console.log('enviado', values)
                }}
            >
                {
                    // touched para ver se o campo foi tocado
                    ({
                        touched,
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                    }) => {

                        const { getRootProps, getInputProps } = useDropzone({
                            accept: 'image/*',
                            onDrop: acceptedFile => {
                                // está criando um novo objeto para cada file só que acrescentando nesse objeto
                                // a propriedade preview com o valor de URL.createObjectURL() => (nativo do JS)
                                const newFiles = acceptedFile.map(file => Object.assign(file, {
                                    preview: URL.createObjectURL(file)
                                }))
                    
                                setFieldValue('files', [
                                    ...values.files,
                                    ...newFiles,
                                ])
                            }
                        })
                    
                        const handleRemoveFile = fileName => {
                            const newFileState = values.files.filter(file => file.name !== fileName)
                    
                            setFieldValue('files', newFileState)
                        }

                        return (
                            <form onSubmit={handleSubmit}>
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

                                        <FormControl error={errors.title && touched.title} fullWidth>
                                            <StyledInputLabel>Título do Anúncio</StyledInputLabel>
                                            <Input 
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                { errors.title && touched.title ? errors.title : null }
                                            </FormHelperText>
                                        </FormControl>
                                        <br /><br />

                                        <FormControl error={errors.category && touched.category} fullWidth>
                                            <StyledInputLabel>Categoria</StyledInputLabel>
                                            <Select
                                                variant="standard"
                                                name="category"
                                                value={values.category}
                                                fullWidth
                                                onChange={handleChange}      
                                            >                        
                                                <MenuItem value="Bebê e Criança">Bebê e Criança</MenuItem>
                                                <MenuItem value="Agricultura">Agricultura</MenuItem>
                                                <MenuItem value="Moda">Moda</MenuItem>
                                                <MenuItem value="Carros, Motos e Barcos">Carros, Motos e Barcos</MenuItem>
                                                <MenuItem value="Serviços">Serviços</MenuItem>
                                                <MenuItem value="Lazer">Lazer</MenuItem>
                                                <MenuItem value="Animais">Animais</MenuItem>
                                                <MenuItem value="Moveis, Casa e Jardim">Moveis, Casa e Jardim</MenuItem>
                                                <MenuItem value="Imóveis">Imóveis</MenuItem>
                                                <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                                <MenuItem value="Celulares e Tablets">Celulares e Tablets</MenuItem>
                                                <MenuItem value="Esporte">Esporte</MenuItem>
                                                <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                                <MenuItem value="Emprego">Emprego</MenuItem>
                                                <MenuItem value="Outros">Outros</MenuItem>
                                            </Select>
                                            <FormHelperText>
                                                { errors.category && touched.category ? errors.category : null }
                                            </FormHelperText>
                                        </FormControl>
                                    </StyledBox>
                                </StyledContainerBox>

                                <StyledContainerBox maxWidth="md">
                                    <StyledBox sx={{ boxShadow: 1 }}>
                                        <Typography component="h6" variant="h6" color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                                            Imagens
                                        </Typography>
                                        <Typography component="div" variant="body2" color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                                            A primeira imagem é a foto principal do seu anúncio.
                                        </Typography>
                                        <StyledBoxThumbsContainer>
                                            <StyledBoxDropzone {...getRootProps()}>
                                                <input name="files" {...getInputProps()} />
                                                <Typography variant="body2" color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                                                    Clique para adicionar ou arraste a imagem para aqui.
                                                </Typography>
                                            </StyledBoxDropzone>
                                            {
                                                values.files.map((file, index) => (
                                                    <Box
                                                        key={file.name}
                                                        className={style.boxThumb}
                                                        style={{ backgroundImage: `url(${file.preview})` }}
                                                    >
                                                        {
                                                            index === 0 ?
                                                                <Box className={style.boxMainImage}>
                                                                    <Typography variant="body2" color="secondary">
                                                                        Principal
                                                                    </Typography>
                                                                </Box>
                                                            : null
                                                        }
                                                        <Box className={style.boxThumbMask}>
                                                            <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                                                <DeleteForever fontSize="large" />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </StyledBoxThumbsContainer>
                                        {
                                            errors.files && touched.files
                                            ? <Typography variant="body2" color="error">{errors.files}</Typography>
                                            : null
                                        }
                                    </StyledBox>
                                </StyledContainerBox>

                                <StyledContainerBox maxWidth="md">
                                    <StyledBox sx={{ boxShadow: 1 }}>
                                        <FormControl error={errors.description && touched.description} fullWidth>
                                            <StyledInputLabel variant="filled">Escreva os detalhes do que está vendendo</StyledInputLabel>
                                            <OutlinedInput 
                                                name="description"
                                                multiline
                                                rows={6}
                                                onChange={handleChange}
                                                style={{ paddingTop: 25 }}
                                            />
                                            <FormHelperText>
                                                { errors.description && touched.description ? errors.description : null }
                                            </FormHelperText>
                                        </ FormControl>
                                    </StyledBox>
                                </StyledContainerBox>

                                <StyledContainerBox maxWidth="md">
                                    <StyledBox sx={{ boxShadow: 1 }}>
                                        <FormControl error={errors.price && touched.price} fullWidth>
                                            <StyledInputLabel>Preço de venda</StyledInputLabel>
                                            <Input
                                                onChange={handleChange}
                                                name="price"
                                                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                            />
                                            <FormHelperText>
                                                { errors.price && touched.price ? errors.price : null }
                                            </FormHelperText>
                                        </FormControl>
                                    </StyledBox>
                                </StyledContainerBox>

                                <StyledContainerBox maxWidth="md">
                                    <StyledBox sx={{ boxShadow: 1 }}>
                                        <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                                            Dados de Contato
                                        </Typography>
                                        <FormControl error={errors.name && touched.name} fullWidth>
                                            <StyledInputLabel>Nome</StyledInputLabel>
                                            <Input
                                                name="name"
                                                onChange={handleChange}
                                                fullWidth

                                            />
                                            <FormHelperText>
                                                { errors.name && touched.name ? errors.name : null }
                                            </FormHelperText>
                                        </FormControl>

                                        <br /><br />

                                        <FormControl error={errors.email && touched.email} fullWidth>
                                            <StyledInputLabel>E-mail</StyledInputLabel>
                                            <Input
                                                name="email"
                                                onChange={handleChange}
                                                fullWidth
                                                style={{ paddingTop: '8px' }}
                                            />
                                            <FormHelperText>
                                                { errors.email && touched.email ? errors.email : null }
                                            </FormHelperText>
                                        </FormControl>

                                        <br /><br />

                                        <FormControl error={errors.phone && touched.phone} fullWidth>
                                            <StyledInputLabel>Telefone</StyledInputLabel>
                                            <Input 
                                                name="phone"
                                                onChange={handleChange}
                                                fullWidth

                                            />
                                            <FormHelperText>
                                                { errors.phone && touched.phone ? errors.phone : null }
                                            </FormHelperText>
                                        </FormControl>
                                    </StyledBox>
                                </StyledContainerBox>

                                <StyledContainerBox maxWidth="md">
                                    <Box textAlign="right">
                                        <Button type="submit" variant="contained" color="primary">
                                            Publicar Anúncio
                                        </Button>
                                    </Box>
                                </StyledContainerBox>
                            </form>
                        )
                    }
                }
            </Formik>

        </TemplateDefault>
    )
}

export default Publish