import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../users';

@Component({
  selector: 'app-userdetails',
  standalone: false,
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css'
})
export class UserdetailsComponent implements OnInit {
  id!: number
  user!: Users
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }
  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.user = new Users();
      this.userService.getUserById(this.id).subscribe(
        data => {
          this.user = data;
        },
      );
  }

}
