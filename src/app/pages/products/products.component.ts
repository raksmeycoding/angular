import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../interfaces/product';
import { LoaderComponent } from '../../components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { OffcanvasComponent } from '../../components/offcanvas/offcanvas.component';

@Component({
  selector: 'app-products',
  imports: [LoaderComponent, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  error: unknown;
  loading: boolean = true;
  apiProductService = inject(ApiService);
  ngOnInit(): void {
    this.apiProductService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (error: unknown) => {
        this.error = error;
        this.loading = true;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
