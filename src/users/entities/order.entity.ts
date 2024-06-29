import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';

export class Order {
  fecha: Date;
  user: User;
  products: Product[];
}
