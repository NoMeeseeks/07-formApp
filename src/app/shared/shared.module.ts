import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideMenuComponent
  ], exports: [
    SideMenuComponent,
  ]
})
export class SharedModule { }
