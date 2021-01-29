
import { makePaymentBill } from '@Services/endpoints/makePayment'
import { failure, request, success } from '@Store/reducers/payments'
import { call, put } from 'redux-saga/effects'

export function* makeSinglePayment(_action: ReturnType<typeof request>) {
  try {
    const { payload } = _action
    const response = yield call(makePaymentBill, payload)
    console.log(response)
    yield put(success())
  } catch (e) {
    yield put(failure(e.toString()))
  }
}
