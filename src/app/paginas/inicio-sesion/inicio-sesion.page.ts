import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit() {

    this.api.getUsers().subscribe((res)=>{
      console.log(res[0]);
      },(error)=>{
      console.log(error);
      });
  }

}
