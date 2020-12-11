import { createReducer } from 'typesafe-actions';
import { CHANGE_TITLE_MODAL, ModalActionType, TOGGLE_MODAL } from '../actions';
import { ModalState } from '../../types';

const INITIAL_STATE: ModalState = {
  isOpen: false,
  title: null,
};
const modalReducer = createReducer<ModalState, ModalActionType>(INITIAL_STATE, {
  [TOGGLE_MODAL]: (state) => {
    return {
      ...state,
      isOpen: !state.isOpen,
    };
  },
  [CHANGE_TITLE_MODAL]: (state, action) => {
    return {
      ...state,
      title: action.payload,
    };
  },
});

export default modalReducer;
