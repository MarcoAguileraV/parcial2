import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProductosPageRoutingModule } from './lista-productos-routing.module';

import { ListaProductosPage } from './lista-productos.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProductosPageRoutingModule,

  ],
  declarations: [ListaProductosPage]
})
export class ListaProductosPageModule {}
