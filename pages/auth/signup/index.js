import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
import { 
    Container, 
    FormHelperText, 
    Input, 
    InputLabel, 
    Typography,
} from '@mui/material'

import useToasty from '@/src/contexts/Toasty'
import TemplateDefault from '@/src/templates/Default'
import StyledBox from '@/src/components/StyledBox'

import {
    StyledContainerTitle,
    StyledFormControl,
    StyledButtonSubmit,
    StyledCircularProgress,
} from './styles'
import { initialValues, validationSchema } from './formValues'

const Signup = () => {
    const router = useRouter()
    const { setToasty } = useToasty()
    
    const handleFormSubmit = async values => {
        const response = await axios.post('/api/users', values)

        if (response.data.success) {
            setToasty({
                open: true,
                severity: 'success',
                text: 'Cadastro realizado com sucesso',
            })

            router.push('auth/signin')
        }
    }

    return (
        <TemplateDefault>
            <StyledContainerTitle maxWidth="sm" component="main">
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Crie sua conta
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    E anuncie para todo o Brasil
                </Typography>
            </StyledContainerTitle>

            <Container maxWidth="md">
                <StyledBox>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {
                            ({
                                touched,
                                errors,
                                values,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                            }) => {
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <StyledFormControl fullWidth error={errors.name && touched.name}>
                                            <InputLabel>Nome</InputLabel>
                                            <Input 
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.name && touched.name ? errors.name : null}
                                            </FormHelperText>
                                        </StyledFormControl>

                                        <StyledFormControl fullWidth error={errors.email && touched.email}>
                                            <InputLabel>E-mail</InputLabel>
                                            <Input 
                                                name="email"
                                                type="email"
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.email && touched.email ? errors.email : null}
                                            </FormHelperText>
                                        </StyledFormControl>

                                        <StyledFormControl fullWidth error={errors.password && touched.password}>
                                            <InputLabel>Senha</InputLabel>
                                            <Input 
                                                name="password"
                                                type="password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.password && touched.password ? errors.password : null}
                                            </FormHelperText>
                                        </StyledFormControl>

                                        <StyledFormControl fullWidth error={errors.passwordConf && touched.passwordConf}>
                                            <InputLabel>Confirmação de senha</InputLabel>
                                            <Input 
                                                name="passwordConf"
                                                type="password"
                                                value={values.passwordConf}
                                                onChange={handleChange}
                                            />
                                            <FormHelperText>
                                                {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                                            </FormHelperText>
                                        </StyledFormControl>

                                        {
                                            isSubmitting
                                             ? (
                                                <StyledCircularProgress />
                                             ) : (
                                                <StyledButtonSubmit
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Cadastrar
                                                </StyledButtonSubmit>
                                            )
                                        }
                                    </form>
                                )
                            }
                        }
                    </Formik>
                </StyledBox>
            </Container>
        </TemplateDefault>
    )
}

export default Signup