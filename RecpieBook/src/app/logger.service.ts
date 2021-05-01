import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  addLog(msg: string): void{
    console.log(msg);
  }
}
