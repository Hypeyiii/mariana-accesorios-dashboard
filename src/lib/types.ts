import { ReactNode } from "react";

export type TUser = {
  id: string;
  username: string;
  email: string;
  created_at: string;
  role: string;
  order_count?: number;
  total_amount?: number;
};

export type TOrder = {
  id: string;
  userid: string;
  amount: number;
  status: string;
  created_at: string;
  username?: string;
  email?: string;
};

export type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  created_at: string;
  colors: string[];
  sales?: number;
  route: string;
  stock?: number;
};

export type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  capitalizeLinks?: boolean;
};
