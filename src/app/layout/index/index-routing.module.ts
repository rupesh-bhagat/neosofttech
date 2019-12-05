import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';


const routes: Routes = [
  {
    path:'',
    component:HeaderComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),ModalModule.forRoot()],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
