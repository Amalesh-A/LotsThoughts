import { Component } from '@angular/core';
import { Users } from '../users'; 
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users: Users[] = [];
  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit(): void {

    this.getUsers();
  }

  private getUsers() {
    this.userService.getUserList().subscribe(
      data => {
        console.log("Fetched Users:", data); // Debugging API response
        this.users = data;
      },
      error => {
        console.error("Error fetching users:", error);
      }
    );
  }
  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }
}