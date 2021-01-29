import create from '@Services/api'
import { PaymentBill, PaymentTransit } from '@Types/payments'

const apiBill = create('/ProcesaPagosKushki/AddPayInvoiceKushki')
const apiTransit = create('ProcesaPagosKushki​/AddPayKushki/')

export const makePaymentBill = (body: PaymentBill) => apiBill.post(body)
export const makePaymentTransit = (body: PaymentTransit) => apiTransit.post(body)

