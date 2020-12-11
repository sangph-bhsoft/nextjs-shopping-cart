import { createAction, ActionType } from 'typesafe-actions';

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CHANGE_TITLE_MODAL = 'CHANGE_TITLE_MODAL';

export const toggleModalAction = createAction(TOGGLE_MODAL)<undefined>();

export const changeModalTitleAction = createAction(CHANGE_TITLE_MODAL)<string>();

const modalAction = { toggleModalAction, changeModalTitleAction };

export type ModalActionType = ActionType<typeof modalAction>;
