import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  productItem!: Product;
  updateAt: string = '';
  creationAt: string = '';

  cartService = inject(CartService);

  @Input() set product(product: Product) {
    this.creationAt = new Date(product.creationAt).getHours().toString();
    this.updateAt = new Date(product.updatedAt).getHours().toString();
    this.productItem = product;
  }

  addToCardItem(product: Product) {
    this.cartService.addProductToCart(product);
  }
}
