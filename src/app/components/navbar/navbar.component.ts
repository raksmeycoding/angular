import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';

@Component({
  selector: 'app-navbar',
  imports: [OffcanvasComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  cartService = inject(CartService);

  showDrawer: boolean = false;

  showOffCanVas() {
    this.showDrawer = !this.showDrawer;
  }
}
