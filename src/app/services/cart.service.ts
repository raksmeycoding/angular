import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);
  cartItemTotal = computed(() =>
    this.cartItems().reduce((acc, curr) => acc + curr.quantity, 0)
  );
  subTotal = computed(() => {
    this.cartItems().reduce((acc, currentItem) => {
      return acc + currentItem.product.price * currentItem.quantity;
    }, 0);
  });

  addProductToCart(product: Product) {
    const index = this.cartItems().findIndex(
      (item) => item.product.title === product.title
    );
    if (index === -1) {
      this.cartItems.update((items) => [...items, { product, quantity: 1 }]);
    } else {
      this.cartItems.update((items) => [
        ...items.slice(0, index),
        { ...items[index], quantity: items[index].quantity + 1 },
        ...items.slice(index + 1),
      ]);
    }
  }

  removeFromCartItem(product: Product) {
    this.cartItems.update((items) => {
      return items.filter((item) => item.product.title !== product.title);
    });
  }

  updateInCart(product: Product, quantity: number) {
    this.cartItems.update((item) =>
      item.map((item) =>
        item.product.title === product.title
          ? { product: { ...product }, quantity: quantity }
          : item
      )
    );
  }
}
