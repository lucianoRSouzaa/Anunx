import * as yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string()
        .email('Digite um e-mail válido')
        .required('Campo obrigatório'),
    password: yup.string()
        .min(6, 'Sua senha deve ter pelo menos 6 digitos')
        .required('Campo obrigatório'),
    passwordConf: yup.string()
        .required('Campo obrigatório')
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
})

export {
    initialValues,
    validationSchema
}