import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'update-user/:id', component: UpdateuserComponent},
  {path: '**', redirectTo: 'users' } // Handle unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
