import { products } from '../../../data';

export default function handler(req, res) {
  const { id } = req.query;
  if (!id)
    return res.status(403).json({
      message: 'Not Found',
    });
  const product = products.find((item) => item.id === +id);
  return res.status(200).json(product);
}
