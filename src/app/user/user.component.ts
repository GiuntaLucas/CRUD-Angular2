import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'user-CRUD',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})

export class UserComponent implements OnInit {

  private userService: UserService
  private users: Array<User>;
  private user: User;
  private userSelected: User;
  public isEdit: boolean;

  constructor(userService: UserService) {
    this.user = new User();
    this.userService = userService;
  }

  ngOnInit() {
    this.isEdit = false;
    this.users = [];
    this.userService.getUsers().then(users => this.users = users);
  }

  preEdit(event) {
    this.isEdit = event;
    this.user = new User(this.userSelected.id, this.userSelected.name, this.userSelected.firstname, this.userSelected.age);
  }

  onSelected(user: User) {
    this.userSelected = user;
    this.user = new User();
    this.isEdit = false;
  }

  
  remove(user: User): void {
    this.userService.remove(user);
  }

  
}

export class User {

  public id: number;
  public name: string;
  public firstname: string;
  public age: number;

  constructor(id?: number, name?: string, firstname?: string, age?: number) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
  }

}