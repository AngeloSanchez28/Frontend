import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {InformacionComponent} from "./informacion/informacion.component";
import {IntranetComponent} from "./intranet.component";
import {EjercicioComponent} from "./ejercicio/ejercicio.component";
import {RecetaComponent} from "./receta/receta.component";
import {VideoComponent} from "./video/video.component";
import {MainInformacionComponent} from "./main-informacion/main-informacion.component";

const routes: Routes = [
  { path: '',
    component: IntranetComponent,
    children: [
      {path: 'index', component: IndexComponent },
      {path: 'informacion', component: MainInformacionComponent },
      {path: 'informacion', component: InformacionComponent},
      {path: 'informacion', component: EjercicioComponent},
      {path: 'informacion', component: RecetaComponent},
      {path: 'informacion', component: VideoComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class intranetRoutingModule { }
