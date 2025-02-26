import { Component } from '@angular/core';
import { Users } from '../users'; 
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users: Users[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.getUsers();
  }

  private getUsers() {
    this.userService.getUserList().subscribe(data => {
      this.users = data;
    });
  }
}
