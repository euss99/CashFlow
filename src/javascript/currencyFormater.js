// NumberFormat es una API de JavaScript que nos permite formatear números de acuerdo a un idioma y una moneda.
const currencyFormatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
});

export default currencyFormatter;