import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    const users =[
      {id:11 , firstName:'mohamed' , lastName:'khairy' , email:'mohamed@gmail.com' , password:'70015406'}
    ];
    return (users);
  }

}
