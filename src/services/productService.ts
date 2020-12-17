import axiosClient from './axiosClient';

export const fetchProductsSever = (page: number = 1, pageSize: number = 10) => {
  const url = `/product?page=${page}&&pageSize=${pageSize}`;
  return axiosClient.get(url);
};
export const fetchProductByIdSever = (id: number) => {
  const url = `/product/${id}`;
  return axiosClient.get(url);
};
