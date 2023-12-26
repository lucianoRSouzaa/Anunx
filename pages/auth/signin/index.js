import { useState } from 'react'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { signIn, useSession } from "next-auth/react"

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
    AlertLoginError,
} from './styles'
import { initialValues, validationSchema } from './formValues'

const Signin = () => {
    const router = useRouter()
    const { setToasty } = useToasty()
    const session = useSession()

    const [loginError, setLoginError] = useState(null)
    console.log(session)
    
    const handleFormSubmit = async values => {
        const response = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false
        })

        if (response.error) {
            return setLoginError('Usuário ou senha inválidos')
        }

        router.push('/user/dashboard')
    }

    return (
        <TemplateDefault>
            <StyledContainerTitle maxWidth="sm" component="main">
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Entre na sua conta
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
                                        
                                        {loginError && (
                                            <AlertLoginError severity="error">
                                            {loginError}
                                            </AlertLoginError>
                                        )}

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
                                                    Entrar
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

export default Signin