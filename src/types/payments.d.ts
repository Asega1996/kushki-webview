
export type PaymentBill = {
    numeroBoleta: string
    monto: number
    email: string
    lastFourDigits: number
    cardType: string
    paymentBrand: string
    tokenCharge: string
}


export type PaymentTransit = {
    patente: string
    fecha: string
    cantidadPorticos: number
    monto: number
    email: string
    lastFourDigits: number
    cardType: string
    paymentBrand: string
    tokenCharge: string
}