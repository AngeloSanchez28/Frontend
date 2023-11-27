import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { IndexComponent } from './index/index.component';
import {intranetRoutingModule} from "./intranet-routing.module";
import {RouterModule} from "@angular/router";
import { InformacionComponent } from './informacion/informacion.component';
import { IntranetComponent } from './intranet.component';
import {LayoutModule} from "../layout/layout.module";
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { RecetaComponent } from './receta/receta.component';
import { VideoComponent } from './video/video.component';
import { MainInformacionComponent } from './main-informacion/main-informacion.component';



@NgModule({
  declarations: [
    IndexComponent,
    InformacionComponent,
    IntranetComponent,
    EjercicioComponent,
    RecetaComponent,
    VideoComponent,
    MainInformacionComponent
  ],
    imports: [
        CommonModule,
        intranetRoutingModule,
        RouterModule,
        LayoutModule,
        NgOptimizedImage,
    ]
})
export class IntranetModule { }
