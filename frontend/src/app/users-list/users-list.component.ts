import { Component } from '@angular/core';
import { Users } from '../users'; 

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users: Users[] = [];
  ngOnInit(): void {

    this.users = [
      { id: 1, firstName: 'User', lastName: '1', email: 'user1@mail.com' },
      { id: 2, firstName: 'User', lastName: '2', email: 'user2@mail.com' }
    ];
  }
}
