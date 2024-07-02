import { ConfigType } from '@nestjs/config';
import config from './config';
export declare class AppService {
    private tasks;
    private configService;
    constructor(tasks: any[], configService: ConfigType<typeof config>);
    getHello(): string;
}
