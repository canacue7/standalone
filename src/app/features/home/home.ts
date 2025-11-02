import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SetService } from '../../core/services/setData.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(private setService:SetService){

  }

   readData(){
    // Subscribe al observable para ver todos los items acumulados
    this.setService.getData().subscribe(data=> console.log('la data guardada: ', data))
  }

}
