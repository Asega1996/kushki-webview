import { withNamespace } from '@Utils/index'
import { createAction, createReducer } from 'deox'
import { always, evolve } from 'ramda'

const config = {
  prefix: '_',
  namespace: 'PAYMENTS',
}

type DefaultState = {
  fetching: boolean
  error: boolean
  error_msg: string
  success: boolean
}

// ACTIONS
export const request = createAction(withNamespace('REQUEST', config),
(resolve: any) => ( body :any) => resolve( body ))

export const success = createAction(
    withNamespace('SUCCESS', config))
  
export const failure = createAction(withNamespace('FAILURE_', config),
(resolve: any) => ({ error_msg }: { error_msg: string }) => resolve( error_msg ))

const defaultState: DefaultState = {
  fetching: false,
  success: false,
  error: false,
  error_msg: ""
}

export default createReducer(defaultState, (handleAction: any) => [
  handleAction(request, (state : DefaultState) =>
    evolve(
      {
        success: always(false),
        error: always(false),
        fetching: always(true),
      },
      state
    )
  ),
  handleAction(success, (state: DefaultState) =>
    evolve(
      {
        fetching: always(false),
        success: always(true),
        error: always(false),
      },
      state
    )
  ),
  handleAction(failure, (state : DefaultState, payload: string) =>
    evolve(
      {
        fetching: always(false),
        error: always(true),
        success: always(false),
        error_msg: always(payload)
      },
      state
    )
  ),
])
