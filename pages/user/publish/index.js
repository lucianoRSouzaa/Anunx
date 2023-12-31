import {
    Typography,
    Box,
    Select,
    Button,  
    FormControl,
    OutlinedInput,
    InputAdornment,
    MenuItem,
    FormHelperText,
    Input,
    CircularProgress,
} from '@mui/material'

import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import axios from 'axios'

import { initialValues, validationSchema } from './formValues'

import TemplateDefault from '../../../src/templates/Default'
import useToasty from '@/src/contexts/Toasty'
import dbConnect from '@/src/utils/dbConnect'
import CategoriesModel from '@/src/models/categories'
import {
    StyledContainerTitle,
    StyledContainerBox,
    StyledInputLabel
} from './styles'
import {
    formatPrice,
    unformatPrice,
    formatPhoneNumber,
    unformatPhoneNumber,
} from './maskHelpers'
import FileUpload from '@/src/components/FileUpload'
import StyledBox from '@/src/components/StyledBox'

const Publish = ({ categories }) => {
    const { setToasty } = useToasty()
    const router = useRouter()
    const session = useSession()

    const formValues = {
        ...initialValues,
    }

    formValues.image = session.data.user.image
    formValues.userId = session.data.user.userId

    const handleSuccess = () => {
        setToasty({
            open: true,
            text: 'Anúncio cadastrado com sucesso',
            severity: 'success',
        })
    
        router.push('/user/dashboard')
    }
    
    const handleError = () => {
        setToasty({
            open: true,
            text: 'Ops, ocorreu um erro, tente novamente.',
            severity: 'error',
        })
    }

    const handleChangePrice = (event, setFieldValue) => {
        formatPrice(event, setFieldValue)
    }

    const handleChangePhone = (event, setFieldValue) => {
        formatPhoneNumber(event, setFieldValue)
    }

    const handleSubmit = async (values) => {
        const formData = new FormData()
    
        for(let field in values) {
            if (field === 'files') {
                values.files.forEach(file => {
                    formData.append('files', file)
                })
            } else {
                // está fezendo isso, basicamente ==> formData.title = values.title
                formData.append(field, values[field])
            }
        }

        formData.append('price', unformatPrice(values.price))
        formData.append('phone', unformatPhoneNumber(values.phone))
    
        axios.post('/api/products/add', formData)
            .then(handleSuccess)
            .catch(handleError)
    }

    return (
        <TemplateDefault>

            <Formik 
                initialValues={formValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
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
                        isSubmitting,
                    }) => {

                        return (
                            <form onSubmit={handleSubmit}>

                                <Input name="userId" type="hidden" value={values.userId} />
                                <Input name="image" type="hidden" value={values.image} />

                                <StyledContainerTitle maxWidth="sm">
                                    <Typography component="h1" variant="h2" align="center" color="textPrimary">
                                        Publicar Anúncio
                                    </Typography>
                                    <Typography component="h5" variant="h5" align="center" color="textPrimary">
                                        Quanto mais detalhado, melhor!
                                    </Typography>
                                </StyledContainerTitle>
                                <StyledContainerBox maxWidth="md">
                                    <StyledBox shadow>

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
                                                {
                                                    categories.map((category) => (
                                                        <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                            <FormHelperText>
                                                { errors.category && touched.category ? errors.category : null }
                                            </FormHelperText>
                                        </FormControl>
                                    </StyledBox>
                                </StyledContainerBox>

                                <StyledContainerBox maxWidth="md">
                                    <StyledBox shadow>
                                        <FileUpload 
                                            files={values.files}
                                            errors={errors.files}
                                            touched={touched.files}
                                            setFieldValue={setFieldValue}
                                        />
                                    </StyledBox>
                                </StyledContainerBox>

                                <StyledContainerBox maxWidth="md">
                                    <StyledBox shadow>
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
                                    <StyledBox shadow>
                                        <FormControl error={errors.price && touched.price} fullWidth>
                                            <StyledInputLabel>Preço de venda</StyledInputLabel>
                                            <Input
                                                value={values.price}
                                                onChange={(event) => handleChangePrice(event, setFieldValue)}
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
                                    <StyledBox shadow>
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
                                                value={values.phone}
                                                name="phone"
                                                onChange={(event) => handleChangePhone(event, setFieldValue)}
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
                                        {
                                            isSubmitting
                                                ? <CircularProgress />
                                                :  <Button type="submit" variant="contained" color="primary">
                                                    Publicar Anúncio
                                                   </Button>
                                        }
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

export async function getServerSideProps() {
    await dbConnect()

    const categories = await CategoriesModel.find({})

    return {
        props: {
            categories: JSON.parse(JSON.stringify(categories))
        }
    }
}

Publish.requireAuth = true

export default Publish