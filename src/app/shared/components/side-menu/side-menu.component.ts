import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    {
      title: 'Basicos', route: './reactive/basic'
    }, {
      title: 'Dinamicos', route: './reactive/dynamic'
    }, {
      title: 'Switches', route: './reactive/switches'
    },
  ];
  public authMenu: MenuItem[] = [
    {
      title: 'registro', route: './auth'
    },
  ];
}
