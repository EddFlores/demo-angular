import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Importación del servicio
import { DataService } from '../../shared/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  public product:any = {};

  // Se agrega el servicio en el constructor
  constructor(private route:ActivatedRoute, 
    private dataSvc:DataService, 
    private location:Location
  ) {}

  ngOnInit(): void {
    // Se obtiene el id de la URL y se guarda en productId
    const productId = this.route.snapshot.paramMap.get('id');
    // Se obtiene el producto por medio del Id y se guarda en product,
    // como product es un ARREGLO de un solo elemento y el html no está formateado
    // para imprimir arreglos, se realiza un DESTRUCTURING con [this.product] y se forza
    // al formateo
    [this.product] = this.dataSvc.getProductById(productId); 
  }

  onGoBack(): void {
    this.location.back();
  }

}
