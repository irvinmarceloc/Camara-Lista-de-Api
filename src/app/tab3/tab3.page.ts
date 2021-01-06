import { Component } from '@angular/core';
import { User } from '../model/user.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  users: User[] = []; 
  constructor(private userService: UserService) {
    this.userService.getUsuarios()
  .subscribe ( resp => this.users = resp);
  }
}
