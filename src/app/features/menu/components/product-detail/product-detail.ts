import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../core/services/products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  product: any = null;
  loading: boolean = true;

  constructor(
    private productService: ProductService,
  ) {}

  @Input() id?: string;

  ngOnInit(): void {
    console.log('elId recibido como Input:', this.id);
    if(this.id){
      this.productService.getProducts().subscribe(data => {
    console.log('el data:', data);
        const idNum = Number(this.id);
        const foundProduct = data?.items?.find((item: any) => item.id === idNum);
    console.log('el foundProduct:', foundProduct);
        this.product = foundProduct;
        this.loading = false;
        console.log('Detalle del producto:', this.product);
      })
    }

    // const id= this.route.snapshot.paramMap.get('elId');
    // console.log('ID del producto desde la ruta:', id);
    // Obtener el ID de la ruta
  //   const id = this.route.snapshot.paramMap.get('id');
    
  //   if (id) {
  //     // Hacer petición directa al endpoint específico del personaje
  //     this.http.get(`https://dragonball-api.com/api/characters/${id}`)
  //       .subscribe({
  //         next: (data) => {
  //           this.product = data;
  //           this.loading = false;
  //           console.log('Detalle del producto:', this.product);
  //         },
  //         error: (error) => {
  //           console.error('Error al cargar el producto:', error);
  //           this.loading = false;
  //         }
  //       });
  //   }
  }
}