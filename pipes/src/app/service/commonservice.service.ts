import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }

  message!:string;

  ngOnInit(){
    console.log(this.message);
  }
}
