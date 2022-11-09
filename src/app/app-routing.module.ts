import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./paginas/lista-productos/lista-productos.module').then( m => m.ListaProductosPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./paginas/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./paginas/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./paginas/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'detalle-carrito',
    loadChildren: () => import('./paginas/detalle-carrito/detalle-carrito.module').then( m => m.DetalleCarritoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
