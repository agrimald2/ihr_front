// category and prodcut
export type Category = {
  name: string;
  description: string;
  store: number;
  created_at: string;
  updated_at: string;
  image: string;
}

export type Product = {
  id: number;
  name: string;
  name_ua?: string;
  name_sp?: string;
  name_fr?: string;
  name_ch?: string;
  code: string;
  brand: string;
  gender: number;
  composition: string;
  manufacturer: string;
  description: string;
  price: string;
  created_at: string;
  updated_at: string;
  category: number;
  subcategory: number;
  store: number;
  color: number[];
  size: number[];
  images: string[];
}

