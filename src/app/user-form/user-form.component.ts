import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; 

import { User } from '../user/user.component';
import { UserService } from '../user.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;

  @Input() isEdit: boolean;

  userService: UserService;


  constructor(userService: UserService) {
    this.user = new User();
    this.userService = userService;

  }

  ngOnInit() {}

  create(user: User): void {
    
    this.userService.getUsers().then(function (u) {
      console.log(u)
      user.id = u.length + 1;
      user.name = user.name + '-' + user.id;
    })
    this.userService.create(user);
    this.user = new User();
    
  }
  edit(user: User): void {
    this.userService.getUser(user.id).then(function (u) {
      u.name = user.name;
      u.firstname = user.firstname;
      u.age = user.age;
    })
    this.isEdit = false;
    this.user = new User();
  }

}
