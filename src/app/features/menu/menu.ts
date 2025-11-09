import { Component, OnInit, inject } from '@angular/core';
import { ProductCard } from './components/product-card/product-card';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/ngrx/products.actions';
import { selectAllProducts, selectProductsLoading, selectProductsError } from '../../store/ngrx/products.selectors';
import { addToCart } from '../../store/ngrx/cart.actions';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, ProductCard],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit {
  private store = inject(Store);

  products: any[] = [];

  ngOnInit(): void {
    // Ask NgRx to load products; ProductsEffects will call the service and populate the store
    this.store.dispatch(loadProducts());

    // Subscribe to the products slice
    this.store.select(selectAllProducts).subscribe((p) => {
      console.log('[NgRx] products slice changed:', p);
      this.products = p || [];
    });

    // Debug: log loading and errors to help diagnose why products may be missing
    this.store.select(selectProductsLoading).subscribe((l) => console.log('[NgRx] products loading:', l));
    this.store.select(selectProductsError).subscribe((e) => e && console.error('[NgRx] products error:', e));
  }

  onAddToCart(product: any) {
    this.store.dispatch(addToCart({ product }));
  }
}
