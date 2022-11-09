export interface Productos {
  title : string;
  descripcion : string;
  price : number;
  discountPercentage : number;
  rating : number;
  stock : number;
  brand : string;
  category : string;
  thumbnail : string;
  images : string;
}

export interface ProductosConId extends Productos {
  id : number;
}
