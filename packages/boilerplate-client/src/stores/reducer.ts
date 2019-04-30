// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import { IState, Action } from './model'
import { INITIAL_STATE } from './ReduxStore'
import { produce } from 'immer'

export default function reducer(state: IState = INITIAL_STATE, action: Action) {
  return produce(state, draft => {
    switch (action.type) {
      case 'CHANGE_APP_PAGE':
        draft.appPage = action.page
        break
    }
  })
}
