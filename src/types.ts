export interface Movie {
  title: string;
  imgUrl: string;
  categories: string[];
  rating: number;
}

export interface Service {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface Price {
  title: string;
  price: string;
  benefits: {
    title: string;
    status: boolean;
  }[];
}
