import { Component } from '@angular/core';
import { ProductCard } from './components/product-card/product-card';
import { ProductDetail } from './components/product-detail/product-detail';

@Component({
  selector: 'app-menu',
  imports: [ProductDetail, ProductCard],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

  onAddToCart(product:any){
    
  }

}
