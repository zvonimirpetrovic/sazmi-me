import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputUserDataComponent } from './input-user-data/input-user-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: InputUserDataComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
