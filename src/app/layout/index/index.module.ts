import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ClickOutsideModule } from 'ng-click-outside';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MaterialModule,
    ClickOutsideModule
  ]
})
export class IndexModule { }
