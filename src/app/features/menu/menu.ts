import { Component, OnInit } from '@angular/core';
import { ProductCard } from './components/product-card/product-card';
import { ProductDetail } from './components/product-detail/product-detail';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services/products';

@Component({
  selector: 'app-menu',
  imports: [CommonModule,ProductDetail, ProductCard],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit{

  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      console.log(data)
      // const eldat= data.items
      this.products = data.items
  })
  }

  products:any[] =[]

  onAddToCart(product:any){
    console.log('añadido producto', product)
  }

}
