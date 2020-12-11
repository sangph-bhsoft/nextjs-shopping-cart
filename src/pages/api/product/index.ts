import slice from 'lodash/slice';
import { products } from '../../../data';

const PAGE_SIZE = 10;
const PAGE = 1;

export default function handler(req, res) {
  let { page } = req.query;
  // eslint-disable-next-line no-restricted-globals
  if (page && !isNaN(page)) {
    page = Number(page);
  } else {
    page = PAGE;
  }

  let { pageSize } = req.query;
  // eslint-disable-next-line no-restricted-globals
  if (pageSize && !isNaN(pageSize)) {
    pageSize = Number(pageSize);
  } else {
    pageSize = PAGE_SIZE;
  }
  const skip = (page - 1) * pageSize;

  const result = slice(products, skip, skip + pageSize);
  res.status(200).json(result);
}
