import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';

import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';

import { Productos } from 'src/app/modelo/productos';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
})
export class ListaProductosPage implements OnInit {

  public producto : Productos;

  constructor(private api : ApiService) {




    this.api.getProducts().subscribe((success)=>{
      console.log(success);
      },(error)=>{
      console.log(error);
      });


  }



  ngOnInit() {

  }






}
