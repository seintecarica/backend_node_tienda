import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { ProductsService } from './../../products/services/products.service';
export declare class UsersService {
    private productsService;
    constructor(productsService: ProductsService);
    private counterId;
    private users;
    findAll(): User[];
    findOne(id: number): User;
    create(payload: CreateUserDto): {
        email: string;
        password: string;
        role: string;
        id: number;
    };
    update(id: number, payload: UpdateUserDto): User;
    remove(id: number): boolean;
    getOrdersByUser(id: number): Order;
}
