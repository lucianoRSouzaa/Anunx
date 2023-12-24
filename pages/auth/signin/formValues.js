import * as yup from 'yup'

const initialValues = {
    email: '',
    password: '',
}

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('Digite um e-mail válido')
        .required('Campo obrigatório'),
    password: yup.string()
        .min(6, 'Sua senha deve ter pelo menos 6 digitos')
        .required('Campo obrigatório'),
})

export {
    initialValues,
    validationSchema
}