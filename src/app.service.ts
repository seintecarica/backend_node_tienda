import { Injectable, Inject } from '@nestjs/common'; //importamos el Inject para inyectar un valor

@Injectable()
export class AppService {

  constructor(@Inject('API_KEY') private apiKey: string){} //inyectamos el valor en el constructor

  getHello(): string {
    return `Hello World! ${this.apiKey}`;
  }
}
