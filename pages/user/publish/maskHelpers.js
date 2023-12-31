export const formatPrice = (event, setFieldValue) => {
    let valorNumerico = event.target.value.replace(/\D/g, '')
    valorNumerico = (valorNumerico / 100).toFixed(2)
    valorNumerico = valorNumerico.replace('.', ',')
    valorNumerico = valorNumerico.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

    setFieldValue('price', valorNumerico)
}

export const unformatPrice = (price) => {
    let priceToSave = price.replace(/[^\d]/g, '')
    priceToSave = parseFloat(priceToSave / 100).toFixed(2)

    return priceToSave
}

export const formatPhoneNumber = (event, setFieldValue) => {
    let phoneNumber = event.target.value.replace(/\D/g, '')

    if (phoneNumber.length === 0) {
        phoneNumber = ''
    } else if (phoneNumber.length <= 2) {
        phoneNumber = `(${phoneNumber}`
    } else if (phoneNumber.length <= 6) {
        phoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2)}`
    } else if (phoneNumber.length <= 10) {
        phoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 6)}-${phoneNumber.substring(6)}`
    } else {
        phoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7, 11)}`
    }

    setFieldValue('phone', phoneNumber)
}

export const unformatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/\D/g, '');
}