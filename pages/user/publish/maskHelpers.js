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