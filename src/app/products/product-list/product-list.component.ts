import { Component, OnInit } from '@angular/core';
// Importación del servicio
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products:any = [];

  // Se agrega la importación al constructor
  constructor(private dataSvc:DataService) { }

  ngOnInit(): void {
    // Se obtiene el array de los productos y se guarda en products
    this.products = this.dataSvc.getAllProducts();
  }

}
