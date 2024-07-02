import { Injectable, Inject } from '@nestjs/common'; //importamos el Inject para inyectar un valor
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    //@Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {} //inyectamos el valor en el constructor

  getHello(): string {
    //const apiKey = this.config.get<string>('API_KEY');
    const apiKey = this.configService.apiKey;
    //const name = this.config.get('DATABASE_NAME');
    const name = this.configService.database.name;
    console.log(this.tasks);
    return `Hello World! ${apiKey} ${name}`;
  }
}
