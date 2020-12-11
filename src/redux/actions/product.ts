import { createAction, ActionType } from 'typesafe-actions';
import { Product } from '../../types';

export const PRODUCT_SET = 'PRODUCT_SET';

export const setProduct = createAction(PRODUCT_SET)<Product>();

const productAction = { setProduct };

export type ProductActionType = ActionType<typeof productAction>;
