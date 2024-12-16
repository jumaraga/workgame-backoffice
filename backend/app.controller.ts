import { Controller, Get, Res, ResponseDecoratorOptions } from "@nestjs/common";

@Controller()
export class AppController {
   constructor() {

   }
   @Get('health')
   halthCheck() {
      return {
         message: 'request success'
      }
   }

}