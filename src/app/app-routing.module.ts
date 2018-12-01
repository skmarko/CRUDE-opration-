import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'list-user',component:ListUserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
