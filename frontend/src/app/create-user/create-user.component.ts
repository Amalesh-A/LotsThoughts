import { Component, OnInit } from '@angular/core';
import { Users } from '../users'; // Adjust the import path as necessary
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  standalone: false,
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
  
  user: Users = new Users();

  constructor(private UserService: UserService, private router: Router) {}
  ngOnInit() {} 

  saveUser() {
    this.UserService.createUser(this.user).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  goToUserList() {
    this.router.navigate(['/users']); 
  }

  onSubmit(form: NgForm) {
    console.log(this.user);
    this.saveUser();
    this.user = new Users();
    form.resetForm();
    setTimeout(() => {
      this.user = new Users();
      form.resetForm();
    }, 0);
  }
}
