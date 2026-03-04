import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // Controla qué menú está abierto
  openMenu: string | null = null;

  // Método para abrir/cerrar submenús
  toggleMenu(menu: string): void {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

}