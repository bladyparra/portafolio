import { Routes, RouterModule } from '@angular/router';

import { 
  AboutComponent,
  PortafolioComponent,
  ProductoComponent
 } from "./components/index.paginas";

const app_route: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto', component: ProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot (app_route, {useHash: true});

