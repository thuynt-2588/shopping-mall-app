export interface IProductItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  sale_off_percent: number;
  favorite: boolean;
  sex: string;
  images: {
    url: string;
    color: string;
  }[];
}
