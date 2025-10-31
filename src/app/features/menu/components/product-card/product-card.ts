import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  @Input() product:any;
  @Output() addToCard = new EventEmitter<any>();
}
