import { request } from '@Store/reducers/payments'
import { getType } from 'deox'
import { takeLatest } from 'redux-saga/effects'
import { makeSinglePayment } from './makeSinglePayment'



export const paymentsSaga = [
    takeLatest(getType(request), makeSinglePayment),
]

  

