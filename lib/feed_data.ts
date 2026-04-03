import { productData } from './products';

export const featureItems = Object.values(productData).slice(0, 8);

export const shoppingFeed = Object.values(productData).slice(4, 12);

export const categories = [
  '인기 상품', '가성비 신발', '댄스 웨어', '커뮤니티'
];
