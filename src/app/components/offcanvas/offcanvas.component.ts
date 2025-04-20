import {
  Component,
  effect,
  HostListener,
  inject,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';
import { CartItem } from '../../interfaces/cart-item';
@Component({
  selector: 'app-offcanvas',
  imports: [],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.css',
})
export class OffcanvasComponent implements OnInit {
  cartService = inject(CartService);
  cartItems = this.cartService.cartItems;

  @Input() visible: boolean = false;

  close() {
    this.visible = false;
  }

  constructor() {
    effect(() => {
      console.log(this.cartItems());
    });
  }
  removeFromCart(cart: CartItem) {
    this.cartService.removeFromCartItem(cart.product);
  }

  // @HostListener('document:click', ['$event'])
  // onOutsideClick(event: MouseEvent) {
  //   const target = event.target as HTMLElement;
  //   const clickedInside = target.closest('.offcanvas-panel') !== null;

  //   if (!clickedInside && this.visible) {
  //     this.close();
  //   }
  // }

  ngOnInit(): void {}
}
