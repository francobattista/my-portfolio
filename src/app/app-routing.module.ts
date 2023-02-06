import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAplicationComponent } from './main-aplication/main-aplication.component';

const routes: Routes = [{
  path: 'main',
  component: MainAplicationComponent
},
{
  path: '',
  redirectTo: 'main',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
