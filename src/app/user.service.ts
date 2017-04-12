import { Injectable } from '@angular/core';

import { User } from './user/user.component';

@Injectable()
export class UserService {

  public users: Array<User>;

  constructor() {
    this.onLoad();
  }

  private onLoad(): void {
    this.users = [];
    for (let i = 1; i < 11; i++) {
      this.users.push(new User(i,'Name-' + i, 'Firstname-' + i, i));
    }
  }

  public getUsers():Promise<User[]>{
    return Promise.resolve(this.users);
  }
  public getUser(id:number):Promise<User>{
    return this.getUsers().then(users => users.find(x => x.id == id));
  }
  public create(user:User):void{
    this.getUsers().then(users => users.push(user));
  }

  public remove(user:User):void{
    this.getUsers().then(success);

    function success(users):void {
      let i = 0;
      for(let u of users){
        if(user.id === u.id){
          users.splice(i,1);
          break;
        }
        i++;
      }
    }
  }
}
