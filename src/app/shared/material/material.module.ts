import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

const MaterialComponent = [
  Material.MatFormFieldModule,
  Material.MatInputModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule,MaterialComponent],
  exports:[CommonModule,MaterialComponent]
})
export class MaterialModule { }
