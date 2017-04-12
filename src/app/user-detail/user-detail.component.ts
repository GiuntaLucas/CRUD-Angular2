import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user/user.component';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
   @Input() public isEdit:boolean;

   @Input() user:User;

   @Output() edit:EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() {   }

  ngOnInit() {
    //this.isEdit = false;
  }

  preEdit():void{
    this.isEdit = true;
    this.edit.emit(this.isEdit);
  }
}
