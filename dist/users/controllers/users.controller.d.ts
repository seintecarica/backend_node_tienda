import { UsersService } from '../../users/services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): import("../entities/user.entity").User[];
    getUser(id: number): import("../entities/user.entity").User;
    getOrders(id: number): import("../entities/order.entity").Order;
    create(payload: CreateUserDto): {
        email: string;
        password: string;
        role: string;
        id: number;
    };
    update(id: number, payload: UpdateUserDto): import("../entities/user.entity").User;
    remove(id: number): boolean;
}
