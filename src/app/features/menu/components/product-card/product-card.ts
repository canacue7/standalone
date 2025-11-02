import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CurrencyFormatPipe } from '../../../../shared/pipes/currency-format.pipe';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SetService } from '../../../../core/services/setData.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyFormatPipe, CurrencyPipe, RouterLink, CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  constructor(private setService:SetService){}

  readData(){
    // Subscribe al observable para ver todos los items acumulados
    this.setService.getData().subscribe(data=> console.log('la data guardada: ', data))
  }
  writeData(){
    this.addToCart.emit(this.product)
    this.setService.setData(this.product)
  }

  @Input() product:any;
  @Output() addToCart = new EventEmitter<any>();
}
