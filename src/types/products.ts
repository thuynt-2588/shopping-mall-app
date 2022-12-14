export interface IProductItem {
  id: string;
  name: string;
  price: number;
  sale_off_percent: number;
  favorite: boolean;
  images: [
    {
      url: string;
      color: string;
    },
    {
      url: string;
      color: string;
    }
  ];
}
