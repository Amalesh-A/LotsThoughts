import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateuser',
  standalone: false,
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent implements OnInit {
  user: Users = new Users();
  id!: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => console.log(error)
    );
  }

  updateUser(): void {
    this.userService.updateUser(this.id, this.user).subscribe(
      (data) => {
        this.router.navigate(['/users']);
      },
      (error) => console.log(error)
    );
  }
}