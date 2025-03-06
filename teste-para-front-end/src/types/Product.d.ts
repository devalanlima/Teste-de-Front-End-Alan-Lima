export interface Product {
  id: number;
  productName: string;
  imageURL: string;
  previousPrice?: string;
  price: string;
  info?: string;
  promo: boolean;
}